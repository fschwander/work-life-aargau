import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {NavBackButton} from '../../components/buttons/NavBackButton';
import {RectButton} from '../../components/buttons/RectButton';
import {Constants} from '../../services/Constants';
import {getDismissedFilters, hideDismissedLabels, mapExclusiveFilters, mapOptionFilters} from './MenuFilterPage';
import {MenuSlideInterface} from './MenuPage';

interface AarauSlideProps {
  slides: Array<MenuSlideInterface>
  setActiveSlide: Function
}

export const AarauFilterSlide: React.FC<AarauSlideProps> = props => {
  const history = useHistory();

  const [enterpriseFilters, setEnterpriseFilters] = useState([
    {
      name: 'alle',
      isActive: true,
      type: Constants.FILTER_MAJOR
    },
    {
      name: 'Interior',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_INTERIORS
    },
    {
      name: 'Bauwesen',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_CONSTRUCTION
    },
    {
      name: 'Infrastruktur',
      isActive: true,
      type: Constants.FILTER_ENTERPRISE_INFRASTRUCTURE
    }
  ]);
  const [poiFilters, setPoiFilters] = useState([
    {
      name: "Bildung",
      isActive: true,
      type: Constants.FILTER_POI_EDUCATION
    }
  ]);
  const [highlightFilter, setHighlightFilter] = useState([
    {
      name: 'klar!',
      isActive: true,
      type: Constants.FILTER_HIGHLIGHTS_ALL
    },
    {
      name: 'nein, danke',
      isActive: false,
      type: Constants.FILTER_HIGHLIGHTS_NONE
    }]
  )

  const EnterpriseFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(enterpriseFilters, setEnterpriseFilters)}
    </div>
  )
  const PoiFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapOptionFilters(poiFilters, setPoiFilters)}
    </div>);
  const HighlightFilterChips = () => (
    <div className='selection-container horizontal-container'>
      {mapExclusiveFilters(highlightFilter, setHighlightFilter)}
    </div>
  )

  const goToAarauVideoSlide = () => {
    const dismissedFilters = getDismissedFilters([enterpriseFilters, poiFilters, highlightFilter])
    history.push('/aarau', dismissedFilters)
  }

  useEffect(() => {
    hideDismissedLabels([enterpriseFilters, poiFilters, highlightFilter])
  })

  return (
    <div className='AarauFilterSlide'>
      <NavBackButton text='zurück' onClick={() => props.setActiveSlide(props.slides[3])}/>
      <p className='transparent'>Du bestimmst, was du sehen möchtest</p>
      <h2>Flugweg über Aarau anpassen</h2>

      <h3>Unternehmensprofile</h3>
      <p>Welche Fachgebiete interessieren dich?</p>
      <EnterpriseFilterChips/>

      <h3>Sehenswürdigkeiten und Fakten</h3>
      <p>Erfahre mehr über den Kanton. Was sind deine Interessen?</p>
      <PoiFilterChips/>

      <h3>Lokale Highlights</h3>
      <p>Möchtest du die lokalen Highlights sehen? Dies können z. B. Schlösser, kulturelles Erbe oder berühmte Gebäude
        sein.</p>
      <HighlightFilterChips/>

      <h3>Bist du bereit?</h3>
      <div className='selection-button-container horizontal-container'>
        <RectButton onClick={goToAarauVideoSlide}
                    text={'Losfliegen!'}/>
      </div>
    </div>
  )
}
