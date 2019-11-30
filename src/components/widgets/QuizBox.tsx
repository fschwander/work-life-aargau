import React, {CSSProperties, useState} from 'react';
import {EntryLabel} from '../labels/EntryLabel';
import {HoverPoint} from '../buttons/HoverPoint';
import {Quiz} from './Quiz';
import './QuizBox.scss'

interface QuestionObject {
  className: string,
  title: string,
  subtitle: string,
  choices: Array<ChoiceObject>,
  answer: string
}

interface ChoiceObject {
  text: string,
  isCorrect: boolean,
  wasSelected?: boolean,
  isActive?: boolean
}

interface QuizBoxProps {
  question: QuestionObject,
  lineLength: number,
  lineRotationInDeg: number,
  orientation?: string
}

export const QuizBox: React.FC<QuizBoxProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const orientation = props.orientation === undefined ? 'left' : props.orientation;

  const getVerticalOrientation = () => {
    if (orientation === 'left' && props.lineRotationInDeg > 270) {
      return 'column-reverse'
    } else {
      return 'column'
    }
  }

  const verticalOrientation: CSSProperties = {flexDirection: getVerticalOrientation()}

  return (
    <div className={`QuizBox ${props.question.className} ${props.orientation}`} style={verticalOrientation}>
      <div className='label'>
        <EntryLabel text={props.question.title}
                    lineWidth={props.lineLength}
                    lineRotationInDeg={props.lineRotationInDeg}
                    orientation={orientation}/>
        <HoverPoint className={'hover-point-quiz'}
                    mouseClicked={() => setIsOpen(!isOpen)}/>
      </div>
      <Quiz question={props.question}
            className={isOpen ? 'open' : 'closed'}
            orientation={orientation}/>
    </div>
  )
}