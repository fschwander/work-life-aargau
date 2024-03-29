import React, {useEffect, useState} from 'react';
import iconWeather from '../../res/icons/weather.svg'
import iconTime from '../../res/icons/time.svg'
import iconWind from '../../res/icons/wind.svg'

interface LocationLabelProps {
  title: string
}

export const LocationDescription: React.FC<LocationLabelProps> = props => {

  const getLocalTime = (): string => {
    let date = new Date();
    return date.getUTCHours() + 2 + ':' + ('0' + date.getUTCMinutes()).slice(-2)
  }

  const [time, setTime] = useState(getLocalTime);

  useEffect(() => {
    const clockInterval = setInterval(() => setTime(getLocalTime), 1000);
    return () => {
      clearInterval(clockInterval)
    }
  }, []);

  return (
    <div className='LocationDescription'>
      <h2>{props.title}</h2>
      <div className='horizontal-container'>
        <div className='icon-container'>
          <img src={iconTime} alt='icon'/>
          <p><b>{time}</b></p>
        </div>
        <div className='icon-container'>
          <img src={iconWeather} alt='icon'/>
          <p><b>10.2</b>°C</p>
        </div>
        <div className='icon-container'>
          <img src={iconWind} alt='icon'/>
          <p><b>14.5</b>km/h</p>
        </div>

      </div>
    </div>
  )
}
