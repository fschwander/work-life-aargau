import castleIcon from "../../../res/icons/castle.svg"
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {ReactComponent as svgBridge} from "../../../res/videos/baden3-bridge.svg";
import videoBaden from "../../../res/videos/baden1.mp4";
import {ReactComponent as svgStairs} from "../../../res/videos/baden2-stairways.svg";
import videoBaden2 from "../../../res/videos/baden2.mp4";
import videoBaden3 from "../../../res/videos/baden3.mp4";
import {VideoSlideItem} from "../VideoSlide";
import {culture} from './culture';
import {hikingTrails} from "./hikingTrails";
import {mammut} from "./mammut";
import {realEstate} from "./realEstate";
import {ruineStein} from "./ruineStein";

export const videoSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    isMainPoint: false,
    poiLabelItems: [
      {
        subtitle: 'Lokales Highlight',
        title: 'Ruine Stein',
        overlayData: ruineStein,
        svgComponent: svgRuine,
        iconSrc: castleIcon,
        posLeftInPct: 69,
        posTopInPct: 33,
        lineLength: 60,
        lineRotation: 40,
        orientation: 'right'
      }
    ],
    infoLabelItems: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: culture,
        svgComponent: svgTower,
        posLeftInPct: 68,
        posTopInPct: 60,
        orientation: 'left',
      },
      {
        title: 'Gewerbeimmobilien & Areal',
        subtitle: 'Günstige Preise',
        className: 'real-estate',
        overlayData: realEstate,
        svgComponent: svgRoof,
        posLeftInPct: 21,
        posTopInPct: 61,
        orientation: 'right'
      },
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRuine,
        posLeftInPct: 210,
        posTopInPct: -150,
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
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Sport & Freizeit',
        subtitle: 'Wanderwege',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgStairs,
        posLeftInPct: 28,
        posTopInPct: 44,
        orientation: 'right'
      },
      {
        title: 'Wanderausrüstung',
        subtitle: 'Rucksäcke, Taschen...',
        className: 'mammut',
        overlayData: mammut,
        svgComponent: svgStairs,
        posLeftInPct: 62,
        posTopInPct: 47,
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
    poiLabelItems: [
      {
        title: 'Holzbrücke',
        subtitle: 'lokales Highlight',
        overlayData: ruineStein,
        svgComponent: svgBridge,
        iconSrc: castleIcon, // todo: add real icon
        posLeftInPct: 66,
        posTopInPct: 59,
        lineLength: 100,
        lineRotation: 140,
        orientation: 'left',
      },
    ],
    infoLabelItems: []
  },

  // SEQUENCE 4
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: false,
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgRoof,
        posLeftInPct: 0,
        posTopInPct: 0,
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
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Kultur & Geschichte',
        subtitle: 'Historische Highlights',
        className: 'culture-and-history',
        overlayData: hikingTrails,
        svgComponent: svgTower,
        posLeftInPct: 0,
        posTopInPct: 0,
        orientation: 'right'
      },
    ]
  },
];
