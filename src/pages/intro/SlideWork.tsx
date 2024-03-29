import React from 'react';
import {useHistory} from 'react-router-dom';
import {RectButton} from '../../components/buttons/RectButton';
import {AnimatedSVG} from '../../components/containers/AnimatedSVG';
import {QuizBox} from '../../components/widgets/QuizBox';
import bgImage from '../../res/imgs/AT_PSI_VILLIGEN.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/AT_PSI_VILLIGEN.svg'
import {questions} from './data/questions'

interface SlideProps {
  isActive: boolean
}

export const SlideWork: React.FC<SlideProps> = props => {
  const history = useHistory()

  const rootClass = 'SlideWork slide full-screen ' + (props.isActive ? 'isActive' : '')

  const redirectToMainPage = () => {
    history.push('/menu', {playIntroVideo: true})
  }

  return (
    <div className={rootClass}>
      <span className='background-image transparent-filter' style={{backgroundImage: `url(${bgImage})`}}/>

      <AnimatedSVG svgComponent={SVGImage} isActive={props.isActive}/>

      <QuizBox className="quiz-companies" question={questions.companies}
               lineLength={130} lineRotationInDeg={300} orientation='right'/>
      <QuizBox className="quiz-jobs" question={questions.jobs}
               lineLength={200} lineRotationInDeg={235} orientation='left'/>

      <div className='bottom-element text-container'>
        <p>Du interessierst dich für die <b>Firmen</b> im Kanton Aargau?</p>
        <p>Entdecke <b>interessante Arbeitsplätze</b> und vieles mehr. Los geht's!</p>
      </div>

      <RectButton className='bottom-element go-to-main-button'
                  text='Abenteuer starten'
                  isActive={true}
                  isGlowing={true}
                  onClick={redirectToMainPage}/>
    </div>
  )
}
