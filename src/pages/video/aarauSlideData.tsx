import React from 'react';
import churchIcon from "../../res/icons/church.svg"
import waterIcon from "../../res/icons/water.svg"
import {ReactComponent as svgABridge} from "../../res/videos/aarau1-bridge.svg";
import {ReactComponent as svgConstruction} from "../../res/videos/aarau1-construction.svg";
import videoAarau1 from "../../res/videos/aarau1.mp4";
import bgImgAarau1 from "../../res/videos/aarau1.jpg";
import bgImgAarau2 from "../../res/videos/aarau2.jpg";
import bgImgAarau3 from "../../res/videos/aarau3.jpg";
import {ReactComponent as svgChurch} from "../../res/videos/aarau2-church.svg";
import videoAarau2 from "../../res/videos/aarau2.mp4";
import {ReactComponent as svgInterior} from "../../res/videos/aarau3-interiors.svg";
import {ReactComponent as svgAare} from "../../res/videos/aarau3-river.svg";
import {ReactComponent as svgEducation} from "../../res/videos/aarau3-education.svg";
import videoAarau3 from "../../res/videos/aarau3.mp4";
import {Constants} from '../../services/Constants';
import {aarvia} from './overlays/info-overlay-data/aarvia';
import {education} from './overlays/info-overlay-data/education';
import {killer} from "./overlays/info-overlay-data/killer";
import {lafargeHolcim} from './overlays/info-overlay-data/lafargeHolcim';
import {aare} from './overlays/poi-overlay-data/aare';
import {churchAarau} from "./overlays/poi-overlay-data/churchAarau";
import {PopupOverlay} from './overlays/PopupOverlay';
import {SlideInOverlay} from './overlays/SlideInOverlay';
import {VideoSlideItem} from "./VideoSlide";

export const aarauSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau2,
    backgroundImg: bgImgAarau2,
    animDurationInSec: 10,
    poiLabelItems: [
      {
        title: 'Stadtkirche Aarau',
        subtitle: 'lokales Highlight',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
        overlayComponent: <SlideInOverlay data={churchAarau}/>,
        svgComponent: svgChurch,
        iconSrc: churchIcon,
        posLeftInPct: 42,
        posTopInPct: 46,
        lineLength: 65,
        lineRotation: 45,
        orientation: 'right',
      }
    ],
    infoLabelItems: []
  },

  // SEQUENCE 2
  {
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau3,
    backgroundImg: bgImgAarau3,
    animDurationInSec: 16,
    poiLabelItems: [
      {
        title: 'Aare',
        subtitle: 'lokales Highlight',
        type: Constants.FILTER_HIGHLIGHTS_ALL,
        overlayComponent: <SlideInOverlay data={aare}/>,
        svgComponent: svgAare,
        iconSrc: waterIcon,
        posLeftInPct: 37,
        posTopInPct: 65,
        lineLength: 135,
        lineRotation: 150,
        orientation: 'left',
      }
    ],
    infoLabelItems: [
      {
        title: 'Interiors',
        subtitle: 'Aargauer Unternehmen',
        type: Constants.FILTER_ENTERPRISE_INTERIORS,
        className: 'killer',
        overlayComponent: <PopupOverlay data={killer}/>,
        svgComponent: svgInterior,
        posLeftInPct: 42,
        posTopInPct: 71,
        orientation: 'right'
      },
      {
        title: 'Bildung & Forschung',
        subtitle: 'Aargauer Vorteile',
        type: Constants.FILTER_POI_EDUCATION,
        className: 'education',
        overlayComponent: <PopupOverlay data={education}/>,
        svgComponent: svgEducation,
        posLeftInPct: 57,
        posTopInPct: 40,
        orientation: 'right'
      }
    ]
  },

  // SEQUENCE 3
  {
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    backgroundImg: bgImgAarau1,
    animDurationInSec: 17,
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Baumaterialen',
        subtitle: 'Aargauer Unternehmen',
        type: Constants.FILTER_ENTERPRISE_CONSTRUCTION,
        className: 'lafarge-holcim',
        overlayComponent: <PopupOverlay data={lafargeHolcim}/>,
        svgComponent: svgConstruction,
        posLeftInPct: 45,
        posTopInPct: 45,
        orientation: 'left'
      }, {
        title: 'Infrastruktur',
        subtitle: 'Aargauer Unternehmen',
        type: Constants.FILTER_ENTERPRISE_INFRASTRUCTURE,
        className: 'aarvia',
        overlayComponent: <PopupOverlay data={aarvia}/>,
        svgComponent: svgABridge,
        posLeftInPct: 48,
        posTopInPct: 71,
        orientation: 'left'
      }
    ]
  },
];
