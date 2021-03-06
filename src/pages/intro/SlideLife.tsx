import React from 'react';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {QuizBox} from '../../components/widgets/QuizBox';
import lenzburgImg from '../../res/imgs/AT_SCHLOSS_LENZBURG.jpg'
import {ReactComponent as lenzburgSvg} from '../../res/imgs/AT_SCHLOSS_LENZBURG.svg'
import {questions} from './data/questions'

interface SlideProps {
  isActive: boolean
}

export const SlideLife: React.FC<SlideProps> = props => {
  const rootClass = 'SlideLife slide full-screen ' + (props.isActive ? 'isActive' : '')

  return (
    <div className={rootClass}>
      <span className='background-image transparent-filter' style={{backgroundImage: `url(${lenzburgImg})`}}/>

      <AnimatedSVG svgComponent={lenzburgSvg} isActive={props.isActive}/>

      <QuizBox className="quiz-reputation" question={questions.reputation}
               lineLength={160} lineRotationInDeg={300} orientation='left'/>
      <QuizBox className="quiz-history" question={questions.history}
               lineLength={170} lineRotationInDeg={250} orientation='left'/>
      <QuizBox className="quiz-sport" question={questions.sport}
               lineLength={90} lineRotationInDeg={30} orientation='right'/>

      <div className='bottom-element'>
        <p>Du möchtest mehr wissen über das <b>Leben</b> im Kanton Aargau?</p>
        <p><b>Perfekt!</b> Dann ist diese Plattform genau das Richtige für dich.</p>
      </div>
    </div>
  )
}

