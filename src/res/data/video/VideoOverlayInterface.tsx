import React from 'react';
import {PlaceholderChart} from './PlaceholderChart';

export interface VideoOverlayInterface {
  type: string,
  header: {
    title: string,
    text: string,
    items: Array<TextItem>
  }
  topics: Array<ImageItem>,
  graph: {
    title: string,
    chartComponent: any
  },
  details: Array<DetailsItem>
}

export interface ImageItem {
  icon: string,
  text: string
}

export interface TextItem {
  text: string,
  value: string,
  linkIcon?: LinkIcon
}

interface DetailsItem {
  image: string,
  title: string,
  linkIcon?: LinkIcon,
  items: Array<TextItem>
}

interface LinkIcon {
  icon: string,
  link: string
}

const emptyObject: VideoOverlayInterface = {
  type: "",
  header: {
    title: "",
    text: "",
    items: [
      {
        text: "",
        value: ""
      },
      {
        text: "",
        value: ""
      }
    ]
  },

  topics: [
    {
      icon: "",
      text: ""
    },
    {
      icon: "",
      text: ""
    }
  ],

  graph: {
    title: "",
    chartComponent: <PlaceholderChart/>
  },

  details: [
    {
      image: "",
      title: "",
      items: [
        {
          text: "",
          value: ""
        },
        {
          text: "",
          value: ""
        }
      ]
    },
  ]
}
