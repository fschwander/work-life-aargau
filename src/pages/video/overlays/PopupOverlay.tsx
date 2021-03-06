import React, {useState} from 'react';
import {RoundButton} from '../../../components/buttons/RoundButton';
import iconArrowLeft from '../../../res/icons/arrow2_left.svg'
import iconArrowRight from '../../../res/icons/arrow2_right.svg'
import {Constants} from "../../../services/Constants";
import {PopupOverlayInterface} from './PopupOverlayInterface';

export interface PopupOverlayProps {
  data: PopupOverlayInterface
}

export const PopupOverlay: React.FC<PopupOverlayProps> = props => {
  const {data} = props;

  const [activeDetail, setActiveDetail] = useState(0);

  const nextDetail = () => {
    const nextIndex = (activeDetail + 1) % props.data.details.length
    setActiveDetail(nextIndex)
  }

  const prevDetails = () => {
    const prevIndex = activeDetail > 0 ? activeDetail - 1 : props.data.details.length - 1;
    setActiveDetail(prevIndex)
  }

  return (
    <div className='PopupOverlay horizontal-container'>
      <div className='box-left vertical-container'>

        <div className='header-container'>
          <h4>{data.type === Constants.TYPE_LIFE ? "Aargauer" : "Unternehmen"}</h4>
          <h2>{data.header.title}</h2>
          <p>{data.header.text}</p>
        </div>

        <div className='topics-container'>
          <h3>Themen</h3>
          <div className='horizontal-container'>
            {
              data.topics.map(d =>
                <div className='horizontal-container' key={d.text}>
                  <img src={d.icon} alt={d.text}/>
                  <p>{d.text}</p>
                </div>)
            }
          </div>
        </div>

        <div className='graph-container'>
          <h3>{data.graph.title}</h3>
          {data.graph.chartComponent}
        </div>
      </div>

      <div className='box-right vertical-container'>
        <div className='details-container'>
          <img src={data.details[activeDetail].image} alt={data.details[activeDetail].title}/>
        </div>

        <div className='box-footer'>
          {
            data.details.length > 1 ?
              <div className='nav-container horizontal-container'>
                <img className='button' src={iconArrowLeft} alt='arrow left' onClick={prevDetails}/>
                <img className='button' src={iconArrowRight} alt='arrow right' onClick={nextDetail}/>
              </div> : null
          }
          <div className='horizontal-container'>
            <h3>{data.details[activeDetail].title}</h3>
            {
              data.details[activeDetail].linkIcon !== undefined ?
                <RoundButton onClick={() => window.open(data.details[activeDetail].linkIcon!.link, '_blank')}
                             icon={data.details[activeDetail].linkIcon!.icon}
                             size='22px'/> : null
            }
          </div>
          {
            data.details[activeDetail].items.map(d =>
              <p key={d.text}>{d.text} <span>{d.value}</span></p>)
          }
        </div>
      </div>

      <div className={`box-explanation ${data.type}`}>
        <h3>{data.header.items_title}</h3>
        {
          data.header.items.map(d =>
            <div className='horizontal-container' key={d.text}>
              <h3>{d.text} <span>{d.value} </span></h3>
              {d.linkIcon !== undefined ?
                <RoundButton onClick={() => window.open(d.linkIcon!.link, '_blank')}
                             icon={d.linkIcon.icon}
                             size='22px'/> : null}
            </div>
          )}
      </div>

    </div>
  )
};
