import React from 'react';
import {HoverPoint} from '../../components/buttons/HoverPoint';
import {VideoFullScreen} from '../../components/animations/VideoFullScreen';
import weLoveAargau from '../../res/videos/weLoveAargau.mp4';
import './VideoPage.scss';

export const VideoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true)

  const pauseVideo = () => {
    setIsPlaying(false)
  }

  const playVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div className='VideoPage full-screen'>
      <VideoFullScreen source={weLoveAargau} playVideo={isPlaying}/>
      <HoverPoint className={'test-hover-point'}
                  mouseEnter={pauseVideo}
                  mouseLeave={playVideo}
                  mouseClicked={() => console.log('mouse clicked...')}/>
    </div>
  )
}