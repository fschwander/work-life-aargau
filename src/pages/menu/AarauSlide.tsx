import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const AarauSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  return (
    <div className='AarauSlide'>
      <NavBackButton text='zurück' onClick={() => props.setActiveSlide(props.slides[0])}/>
      <p className='transparent'>Ein interaktives Abenteuer</p>
      <h2>Aarau entdecken</h2>
      <p>Schaue deine Flugroute an und entscheide, was du auf deinem Weg sehen möchtest!</p>
      <div className='choose-container'>
        <h3 className='large'>Möchtest du direkt starten oder zuerst deine Flugroute anpassen?</h3>
        <div className='selection-button-container horizontal-container'>
          <RectButton onClick={() => history.push('/aarau')} text={'Losfliegen!'}/>
          <RectButton onClick={() => props.setActiveSlide(props.slides[4])} text={'Flugroute filtern'} />
        </div>
      </div>
    </div>
  )
}
