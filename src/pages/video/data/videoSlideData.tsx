import castleIcon from "../../../res/icons/castle.svg"
import bridgeIcon from "../../../res/icons/bridge.svg"
import beerIcon from "../../../res/icons/beer.svg"
import waterIcon from "../../../res/icons/water.svg"
import churchIcon from "../../../res/icons/church.svg"
import videoAarau1 from "../../../res/videos/aarau1.mp4";
import videoAarau2 from "../../../res/videos/aarau2.mp4";
import {ReactComponent as svgRoof} from "../../../res/videos/baden1-roof.svg";
import {ReactComponent as svgRuine} from "../../../res/videos/baden1-ruine.svg";
import {ReactComponent as svgTower} from "../../../res/videos/baden1-tower.svg";
import {ReactComponent as svgBridge} from "../../../res/videos/baden3-bridge.svg";
import {ReactComponent as svgBar} from "../../../res/videos/baden3-bar.svg";
import {ReactComponent as svgLimmat} from "../../../res/videos/baden3-limmat.svg";
import {ReactComponent as svgPerson} from "../../../res/videos/baden3-person.svg";
import {ReactComponent as svgConstruction} from "../../../res/videos/aarau1-construction.svg";
import {ReactComponent as svgABridge} from "../../../res/videos/aarau1-bridge.svg";
import {ReactComponent as svgChurch} from "../../../res/videos/aarau2-church.svg";
import videoBaden from "../../../res/videos/baden1.mp4";
import {ReactComponent as svgStairs} from "../../../res/videos/baden2-stairways.svg";
import videoBaden2 from "../../../res/videos/baden2.mp4";
import videoBaden3 from "../../../res/videos/baden3.mp4";
import {VideoSlideItem} from "../VideoSlide";
import {beerBar} from './beerBar';
import {culture} from './culture';
import {hikingTrails} from "./hikingTrails";
import {lafargeHolcim} from './lafargeHolcim';
import {aarvia} from './aarvia';
import {mammut} from "./mammut";
import {pdagPsycho} from './pdagPsycho';
import {realEstate} from "./realEstate";
import {ruineStein} from "./ruineStein";
import {woodenBridge} from "./woodenBridge";
import {churchAarau} from "./churchAarau";

export const videoSlideData: Array<VideoSlideItem> = [

  // SEQUENCE 1
  {
    className: 'baden-slide1',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden,
    isMainPoint: true,
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
        subtitle: 'Aargauer Vorteile',
        className: 'culture-and-history',
        overlayData: culture,
        svgComponent: svgTower,
        posLeftInPct: 68,
        posTopInPct: 60,
        orientation: 'left',
      },
      {
        title: 'Gewerbeimmobilien & Areal',
        subtitle: 'Aargauer Vorteile',
        className: 'real-estate',
        overlayData: realEstate,
        svgComponent: svgRoof,
        posLeftInPct: 21,
        posTopInPct: 61,
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
        title: 'Wanderwege',
        subtitle: 'Aargauer Vorteile',
        className: 'hiking-trails',
        overlayData: hikingTrails,
        svgComponent: svgStairs,
        posLeftInPct: 38,
        posTopInPct: 60,
        orientation: 'right'
      },
      {
        title: 'Wanderausrüstung',
        subtitle: 'Aargauer Unternehmen',
        className: 'mammut',
        overlayData: mammut,
        svgComponent: svgStairs,
        posLeftInPct: 57,
        posTopInPct: 66,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 3
  {
    className: 'baden-slide3',
    title: 'Die Stadt Baden',
    videoSrc: videoBaden3,
    isMainPoint: false,
    poiLabelItems: [
      {
        title: 'Holzbrücke',
        subtitle: 'lokales Highlight',
        overlayData: woodenBridge,
        svgComponent: svgBridge,
        iconSrc: bridgeIcon,
        posLeftInPct: 60,
        posTopInPct: 58,
        lineLength: 100,
        lineRotation: 140,
        orientation: 'left',
      },
      {
        title: 'Triebguet Frischluftbar',
        subtitle: 'lokales Highlight',
        overlayData: beerBar,
        svgComponent: svgBar,
        iconSrc: beerIcon,
        posLeftInPct: 70,
        posTopInPct: 70,
        lineLength: 80,
        lineRotation: 45,
        orientation: 'right',
      }
    ],
    infoLabelItems: [
      {
        title: 'Psychoterapie',
        subtitle: 'Aargauer Unternehmen',
        className: 'padg',
        overlayData: pdagPsycho,
        svgComponent: svgPerson,
        posLeftInPct: 30,
        posTopInPct: 74,
        orientation: 'left'
      },
    ]
  },

  // SEQUENCE 4
  {
    className: 'aarau-slide1',
    title: 'Die Stadt Aarau',
    videoSrc: videoAarau1,
    isMainPoint: true,
    poiLabelItems: [],
    infoLabelItems: [
      {
        title: 'Baumaterialen',
        subtitle: 'Aargauer Unternehmen',
        className: 'lafarge-holcim',
        overlayData: lafargeHolcim,
        svgComponent: svgConstruction,
        posLeftInPct: 45,
        posTopInPct: 45,
        orientation: 'left'
      },{
        title: 'Infrastruktur',
        subtitle: 'Aargauer Unternehmen',
        className: 'aarvia',
        overlayData: aarvia,
        svgComponent: svgABridge,
        posLeftInPct: 48,
        posTopInPct: 71,
        orientation: 'left'
      }
    ]
  },

  // SEQUENCE 5
  {
    className: 'aarau-slide2',
    title: 'Die Stadt Aarau',
    isMainPoint: false,
    videoSrc: videoAarau2,
    poiLabelItems: [
      {
        title: 'Stadtkirche Aarau',
        subtitle: 'lokales Highlight',
        overlayData: churchAarau,
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
];
