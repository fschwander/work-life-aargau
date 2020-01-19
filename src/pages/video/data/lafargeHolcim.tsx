import React from 'react';
import {PlaceholderChart, VideoOverlayInterface} from "./VideoOverlayInterface";
import {Constants} from "../../../services/Constants";
import imgDetails from '../../../res/imgs/ol_lafarge-holcim.jpg';
import imgDetails2 from '../../../res/imgs/ol_lafarge-holcim2.jpg';
import iconArchitecture from '../../../res/icons/architecture.svg'
import iconBuilding from '../../../res/icons/building.svg'



export const lafargeHolcim: VideoOverlayInterface = {
  type: Constants.TYPE_WORK,
  header: {
    title: "LafargeHolcim",
    text: "Innovation, Nachhaltigkeit und Partnerschaft bilden Boden, Pfeiler und Dach von Holcim, die sich darauf konzentriert, in ihrer Branche und im direkten Umfeld Herausragendes zu leisten.",
    items: [
      {
        text: "Angestellte",
        value: "75'000"
      },
      {
        text: "Standorte",
        value: "in 80 Ländern"
      }
    ]
  },

  topics: [
    {
      icon: iconArchitecture,
      text: "Bauwesen"
    },
    {
      icon: iconBuilding,
      text: "Gebäudeteile"
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: imgDetails,
      title: "Holcim Technology Ltd",
      items: [
        {
          text: "Standort",
          value: "Holderbank"
        },
        {
          text: "Entfernung nach Baden",
          value: "16 Km"
        },
        {
          text: "Angestellte",
          value: "1200"
        }
      ]
    },
    {
      image: imgDetails2,
      title: "LafargeHolcim Foundation",
      items: [
        {
          text: "Gründung",
          value: "2013"
        },
        {
          text: "Zweck",
          value: "Aufmerksamkeit in Baubranche für nachhaltiges Bauen"
        }
      ]
    },
  ]
}