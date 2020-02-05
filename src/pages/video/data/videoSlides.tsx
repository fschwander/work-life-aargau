import videoBaden from "../../../res/videos/baden1.mp4";
import videoBaden2 from "../../../res/videos/baden2.mp4";
import videoBaden3 from "../../../res/videos/baden3.mp4";
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import {culture} from './culture';
import {hikingTrails} from "./hikingTrails";
import {mammut} from "./mammut";
import {realEstate} from "./realEstate";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgStairs} from "../../../res/videos/baden2-stairways.svg";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {VideoSlideProps} from "../VideoSlide";
import {lafargeHolcim} from "./lafargeHolcim";

export const videoSlides: Array<VideoSlideProps> = [

  // SEQUENCE 1
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    isMainPoint: false,
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: culture,
        svgComponent: svgTower,
        translateX: 390,
        translateY: 180,
        hoverPointPosLeft: 40,
        hoverPointPosTop: -40,
        lineLength: 85,
        lineRotation: 70,
        orientation: 'right',
      },
      {
        title: 'Gewerbeimmobilien & Areal',
        subtitle: 'Günstige Preise',
        className: 'realEstate',
        overlayData: realEstate,
        svgComponent: svgRoof,
        translateX: -170,
        translateY: 40,
        hoverPointPosLeft: 40,
        hoverPointPosTop: 50,
        lineLength: 60,
        lineRotation: 300,
        orientation: 'right'
      },
      {
        title: 'Ruine Stein',
        subtitle: 'Lokales Highlight',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgRuine,
        translateX: 210,
        translateY: -150,
        hoverPointPosLeft: 50,
        hoverPointPosTop: -50,
        lineLength: 60,
        lineRotation: 70,
        orientation: 'right'

      }
    ]
  },

  // SEQUENCE 2
  {
    className: 'baden-slide2',
    title: 'Die Stadt Baden',
    isMainPoint: false,
    videoSrc: videoBaden2,
    hoverPoints: [
      {
        title: 'Sport & Freizeit',
        subtitle: 'Wanderwege',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgStairs,
        translateX: -200,
        translateY: 40,
        hoverPointPosLeft: -30,
        hoverPointPosTop: -40,
        lineLength: 160,
        lineRotation: 310,
        orientation: 'right'
      },
      {
        title: 'Wanderausrüstung',
        subtitle: 'Rucksäcke, Taschen...',
        className: 'mammut',
        overlayData: mammut,
        svgComponent: svgStairs,
        translateX: 230,
        translateY: -60,
        hoverPointPosLeft: 180,
        hoverPointPosTop: -25,
        lineLength: 170,
        lineRotation: 235,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 3
  {
    className: 'baden-slide3',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden3,
    isMainPoint: true,
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        translateX: 0,
        translateY: 0,
        hoverPointPosLeft: 0,
        hoverPointPosTop: 0,
        lineLength: 60,
        lineRotation: 70,
        orientation: 'right'
      },
    ]
  },

  // SEQUENCE 4
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: false,
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        translateX: 0,
        translateY: 0,
        hoverPointPosLeft: 0,
        hoverPointPosTop: 0,
        lineLength: 60,
        lineRotation: 70,
        orientation: 'right'
      },
    ]
  },

  // SEQUENCE 5
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau2,
    hoverPoints: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgTower,
        translateX: 0,
        translateY: 0,
        hoverPointPosLeft: 0,
        hoverPointPosTop: 0,
        lineLength: 60,
        lineRotation: 210,
        orientation: 'right'
      },
    ]
  },
]
