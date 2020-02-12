import React from 'react';
import iconHiking from '../../../../res/icons/hiking.svg';
import iconMuseum from '../../../../res/icons/museum.svg';
import iconHistory from '../../../../res/icons/history.svg';
import {Constants} from '../../../../services/Constants';
import {PlaceholderChart, PopupOverlayInterface} from "../PopupOverlayInterface";
import iconLink from '../../../../res/icons/link.svg';
import imgCulture from '../../../../res/imgs/ol_culture.png'
import imgCulture2 from '../../../../res/imgs/ol_culture2.jpg'
import imgCulture3 from '../../../../res/imgs/ol_culture3.png'
import imgCulture4 from '../../../../res/imgs/ol_culture4.jpg'
import imgCulture5 from '../../../../res/imgs/ol_culture5.jpg'
import imgCulture6 from '../../../../res/imgs/ol_culture6.jpg'
import imgCulture7 from '../../../../res/imgs/ol_culture7.jpg'
import imgCulture8 from '../../../../res/imgs/ol_culture8.jpg'

export const culture: PopupOverlayInterface = {
  type: Constants.TYPE_LIFE,
  header: {
    title: "Kultur & Geschichte",
    text: "Der Kanton Aargau verfügt über ein reiches historisches Erbe und ein vielfältiges, aktives und stark in den Regionen verankertes Kulturleben.",
    items: [
      {
        text: "Kultur",
        value: "UNESCO-Erbe"
      },
      {
        text: "Geschichte",
        value: "Schlösser, Museen,.."
      },
      {
        text: "Theater & Tanz",
        value: "Aargauer Tradition"
      },
      {
        text: "Film",
        value: "Fantoche Festival"
      },
      {
        text: "Musik",
        value: "Grosse Musikszene"
      },
      {
        text: "Literatur",
        value: "Aargau als Inspiration"
      }
    ]
  },

  topics: [
    {
      icon: iconHiking,
      text: "Freizeit"
    },
    {
      icon: iconMuseum,
      text: "Kultur"
    }
    ,
    {
      icon: iconHistory,
      text: "Geschichte"
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: imgCulture,
      title: "Vindonissa Museum",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.ag.ch/en/bks/kultur/museen_schloesser/vindonissa_museum/vindonissa_museum.jsp'
      },
      items: [
        {
          text: "Einblicke in die",
          value: "Geschichte und Forschung des Legionslagers Vindonissa"
        },
        {
          text: "Ort",
          value: "Windisch"
        }
      ]
    },
    {
      image: imgCulture2,
      title: "Schloss Lenzburg",
      items: [
        {
          text: "Entstehungszeit",
          value: "vor 1036"
        },
        {
          text: "Burgentyp",
          value: "Höhenburg"
        },
        {
          text: "Ort",
          value: "Lenzburg"
        }
      ]
    },
    {
      image: imgCulture3,
      title: "Schloss Hallwil",
      items: [
        {
          text: "Entstehungszeit",
          value: "vor 1265"
        },
        {
          text: "Burgentyp",
          value: "Wasserburg"
        },
        {
          text: "Ort",
          value: "Seengen"
        }
      ]
    },
    {
      image: imgCulture4,
      title: "Schloss Habsburg",
      items: [
        {
          text: "Entstehungszeit",
          value: "Um 1020/30 bis etwa 1300"
        },
        {
          text: "Burgentyp",
          value: "Höhenburg, Gipfellage"
        },
        {
          text: "Ort",
          value: "Habsburg"
        }
      ]
    },
    {
      image: imgCulture5,
      title: "Flamencos en route",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.flamencos-enroute.com/1-0-Aktuell.html'
      },
      items: [
        {
          text: "Neue Zürcher Zeitung",
          value: "\"Was die Gruppe Flamencos en route zeigt, ist Flamenco vom Besten ...\""
        }
      ]
    },
    {
      image: imgCulture6,
      title: "Fantoche Festival",
      linkIcon: {
        icon: iconLink,
        link: 'https://fantoche.ch/de'
      },
      items: [
        {
          text: "Zweck",
          value: "Festival für Animationsfilm"
        },
        {
          text: "Ort",
          value: "Baden"
        }
      ]
    },
    {
      image: imgCulture7,
      title: "Argovia philharmonic Orchester",
      linkIcon: {
        icon: iconLink,
        link: 'https://www.argoviaphil.ch/'
      },
      items: [
        {
          text: "Gründung",
          value: "1963"
        },
        {
          text: "Ziel",
          value: "Klassische Musik in den ganzen Kanton zu bringen"
        }
      ]
    },
    {
      image: imgCulture8,
      title: "Literatur",
      items: [
        {
          text: "Anzahl der öffentlichen Bibliotheken im Kanton Aargau",
          value: "Rund 90"
        }
      ]
    }
  ]
}