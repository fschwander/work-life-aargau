import React from 'react';
import {calcLineStyle} from '../../services/lineRotationService';
import {RoundButton} from "../buttons/RoundButton";

export interface LocationLabelProps {
  subtitle: string,
  title: string,
  svgComponent: any,
  iconSrc: any,
  posLeftInPct: number,
  posTopInPct: number,
  lineLength: number,
  lineRotation: number,
  orientation: string
}

export const LocationLabel: React.FC<LocationLabelProps> = props => {
  const lineHeight = 1;
  const lineStyle = calcLineStyle(props.orientation, props.lineRotation, lineHeight, props.lineLength)

  return (
    <div className='LocationLabel'
         style={{left: `${props.posLeftInPct}%`, top: `${props.posTopInPct}%`}}>

      <RoundButton size='2em'
                   borderWidth={1}
                   icon={props.iconSrc}
                   onClick={() => console.log('clicked')}/>

      <p>{props.subtitle}</p>
      <h4>{props.title}</h4>
      <div className={`label-line ${props.orientation}`} style={lineStyle}/>
    </div>
  )
}
