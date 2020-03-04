import React, {CSSProperties, ReactElement, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {BackgroundVideoContainer} from '../../components/containers/BackgroundVideoContainer';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {SlideInContainer} from '../../components/containers/SlideInContainer';
import {InfoLabel, InfoLabelItem} from "../../components/labels/InfoLabel";
import {PoiLabel, PoiLabelItem} from "../../components/labels/PoiLabel";
import {ProgressIndicator} from '../../components/widgets/ProgressIndicator';
import {Constants} from '../../services/Constants';
import {LocationDescription} from './LocationDescription';
import {PopupOverlayProps} from './overlays/PopupOverlay';
import {SlideInOverlayProps} from './overlays/SlideInOverlay';

export interface VideoSlideItem {
  title: string,
  videoSrc: string,
  animDurationInSec: number,
  poiLabelItems: Array<PoiLabelItem>
  infoLabelItems: Array<InfoLabelItem>
}

interface VideoSlideProps extends VideoSlideItem {
  popupComponent: PopupOverlayProps,
  setPopupComponent: Function,
  slideInComponent: SlideInOverlayProps,
  setSlideInComponent: Function,
  switchToNextSlide: Function
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const location = useLocation();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [slidePaused, setSlidePaused] = useState(false);

  const {popupComponent, setPopupComponent, slideInComponent, setSlideInComponent} = props;
  const animationStaggerInSec: number = 3;

  const getFilteredPoiLabelItems = (itemArray: Array<PoiLabelItem>, dismissedFiltersArray: Array<{ type: string }>): Array<PoiLabelItem> => {
    if (dismissedFiltersArray === undefined || dismissedFiltersArray.length === 0) {
      return itemArray
    } else {
      const filteredArray: Array<PoiLabelItem> = [];
      itemArray.forEach(item => {
        const itemIsDismissed = dismissedFiltersArray.some(dismissedItem => dismissedItem.type === item.type);
        if (!itemIsDismissed) {
          filteredArray.push(item)
        }
      })
      return filteredArray
    }
  };

  const getFilteredInfoLabelItems = (itemArray: Array<InfoLabelItem>, dismissedFiltersArray: Array<{ type: string }>): Array<InfoLabelItem> => {
    if (dismissedFiltersArray === undefined || dismissedFiltersArray.length === 0) {
      return itemArray
    } else {
      const filteredArray: Array<InfoLabelItem> = [];
      itemArray.forEach(item => {
        const itemIsDismissed = dismissedFiltersArray.some(dismissedItem => dismissedItem.type === item.type);
        if (!itemIsDismissed) {
          filteredArray.push(item)
        }
      })
      return filteredArray
    }
  };

  const dismissedFilters = location.state === undefined || location.state.dismissedFilters === undefined ? [] : location.state.dismissedFilters;
  const filteredPoiLabelItems = getFilteredPoiLabelItems(props.poiLabelItems, dismissedFilters);
  const filteredInfoLabelItems = getFilteredInfoLabelItems(props.infoLabelItems, dismissedFilters)

  const onVideoEnded = () => {
    setAnimationStarted(true);
  }

  const openPopUpOverlay = (component: ReactElement) => {
    if (slideInComponent !== undefined) {
      setSlideInComponent(undefined)
    }
    setPopupComponent(component)
    setSlidePaused(true);
  }

  const openSlideInOverlay = (component: ReactElement) => {
    if (popupComponent !== undefined) {
      setPopupComponent(undefined)
    }
    setSlideInComponent(component);
    setSlidePaused(true);
  }

  const closeOverlay = () => {
    setSlidePaused(false);
    setSlideInComponent(undefined);
    setPopupComponent(undefined);
  }

  const getFadeInOutClass = (): string => {
    return slideInComponent !== undefined || popupComponent !== undefined ? 'fade-out' : 'fade-in'
  }

  const getTransitionStyles = (i: number, delay: number): CSSProperties => {
    return {
      transition: 'opacity 1s ease-in-out',
      transitionDelay: i * animationStaggerInSec + delay + 's',
      opacity: animationStarted ? 1 : 0
    }
  }

  return (
    <div className={`VideoSlide`}>
      <BackgroundVideoContainer source={props.videoSrc}
                                playVideo={true}
                                onVideoEnded={onVideoEnded}>

        <div className={`anim-group-container`}>

          {filteredPoiLabelItems.map((d, i) => {
              const styles = getTransitionStyles(i, 2)
              return <div className='anim-group' key={i}>
                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={i * animationStaggerInSec}/>
                <div className={`${getFadeInOutClass()}`}>
                  <PoiLabel {...d} styles={styles}
                            onClick={() => openSlideInOverlay(d.overlayComponent)}/>
                </div>
              </div>
            }
          )}


          {filteredInfoLabelItems.map((d, i) => {
            const index = filteredPoiLabelItems.length + i;
            const styles = getTransitionStyles(index, 2)
            return (
              <div className={`anim-group`} key={d.className + i}>
                <AnimatedSVG svgComponent={d.svgComponent}
                             isActive={animationStarted}
                             animationDelay={index * animationStaggerInSec}/>
                <div
                  className={`${getFadeInOutClass()}`}>
                  <InfoLabel {...d} styles={styles}
                             onClick={() => openPopUpOverlay(d.overlayComponent)}/>
                </div>
              </div>
            )
          })}
        </div>
      </BackgroundVideoContainer>

      <LocationDescription title={props.title}/>

      {animationStarted ?
        <div className={`progress-indicator-container ${getFadeInOutClass()}`}>
          <ProgressIndicator animDurationInSec={(filteredInfoLabelItems.length + filteredPoiLabelItems.length) * animationStaggerInSec}
                             animationPaused={slidePaused}
                             onElementClicked={props.switchToNextSlide}/>
        </div> : null}

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

      {slideInComponent !== undefined ?
        <SlideInContainer onCloseButtonClicked={closeOverlay}
                          slideInDirection={Constants.SLIDE_FROM_RIGHT}>
          {slideInComponent}
        </SlideInContainer> : null}

    </div>
  )
}
