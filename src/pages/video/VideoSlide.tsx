import React from 'react';
import {OverlayHoverPoint} from '../../components/buttons/OverlayHoverPoint';
import {BackgroundVideo} from '../../components/containers/BackgroundVideo';
import {PopupContainer} from '../../components/containers/PopupContainer';
import {LocationLabel} from '../../components/labels/LocationLabel';
import {VideoOverlayInterface} from '../../res/data/video/VideoOverlayInterface';

export interface VideoSlideProps {
  className: string,
  title: string,
  videoSrc: string,
  hoverPoints: Array<{
    className: string,
    hOrientation?: string,
    data: VideoOverlayInterface
  }>
}

export const VideoSlide: React.FC<VideoSlideProps> = props => {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [popupComponent, setPopupContainer] = React.useState();

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    if (popupComponent === undefined) {
      setIsPlaying(true)
    }
  }

  const onVideoEnded = () => {
    console.log('video ended...');
  }

  const openOverlay = (overlay: any) => {
    setPopupContainer(overlay)
    setIsPlaying(false);
  }

  const closeOverlay = () => {
    setPopupContainer(undefined);
    setIsPlaying(true)
  }

  return (
    <div className={`VideoSlide ${props.className} full-screen`}>
      <BackgroundVideo source={props.videoSrc} playVideo={isPlaying} onVideoEnded={onVideoEnded}/>

      <div className={`overlay-hover-point-container ${popupComponent === undefined ? 'show' : 'hide'}`}>

        {props.hoverPoints.map((d, i) => <OverlayHoverPoint className={d.className}
                                                            key={d.className + i}
                                                            data={d.data}
                                                            hOrientation={d.hOrientation !== undefined ? d.hOrientation : undefined}
                                                            onMouseEnter={pauseVideo}
                                                            onMouseLeave={playVideo}
                                                            onPointClicked={openOverlay}/>)}
      </div>

      <LocationLabel title={props.title}/>

      {popupComponent !== undefined ?
        <PopupContainer onCloseButtonClicked={closeOverlay}>
          {popupComponent}
        </PopupContainer> : null}

    </div>
  )
}