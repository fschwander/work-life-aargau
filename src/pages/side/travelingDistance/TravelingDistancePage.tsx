import React, {useEffect, useRef, useState} from 'react';
import {SelectionChip} from './SelectionChip';
import {ReactComponent as MapSVG} from '../../../res/imgs/map.svg';
import * as d3 from 'd3';
import iconTrain from '../../../res/icons/train.svg';
import citiesData from './citiesData.json'

interface Props {
  svgComponent: React.FC,
  animationDuration?: number,
}

export const TravelingDistancePage: React.FC<Props> = props => {
  const isInitialMount = useRef(true)
  const svgRef: React.RefObject<SVGSVGElement> = React.createRef();

  const [lakesVisible, setLakesVisible] = useState(true);
  const [cantonsVisible, setCantonsVisible] = useState(true);
  const [trainsVisible, setTrainsVisible] = useState(true);
  const [cityActive, setCityActive] = useState();
  const [cityHovered, setCityHovered] = useState();
  const [legendeActive, setLegendeActive] = useState(true);
  // const [motorwaysVisible, setMotorwaysVisible] = useState(true);

  const initMap = () => {
    setupCities()
  }

  const updateChart = () => {
    // console.log(svgRef, svgRef.current, mapSVG);
    const mapSVG = d3.select(svgRef.current)

    mapSVG.selectAll('#lakes')
      .attr('opacity', lakesVisible ? 1 : 0)

    mapSVG.selectAll('#trains')
      .attr('opacity', trainsVisible ? 1 : 0)

    mapSVG.selectAll('#cantons')
      .attr('opacity', cantonsVisible ? .5 : 0)

    mapSVG.select('.TravelingLegende')
      .attr('opacity', trainsVisible ? 1 : 0)

    mapSVG.selectAll('.city')
      .selectAll('circle')
      .classed('is-active', d => d === cityActive)
      .attr('fill', d => d === cityActive ? '#7EE2D1' : 'white')

    mapSVG.selectAll('.city')
      .selectAll('.text-city-hover')
      .style('transform', `translate(-${cityHovered !== undefined ? ((cityHovered.city.length) * 3) : 0}px,-15px)`)
      .style('visibility', d => d === cityHovered ? 'visible' : 'hidden')
      .text(`${cityHovered !== undefined ? cityHovered.city : null}`)

    mapSVG.selectAll('.city')
      .selectAll('.text-city-active')
      .style('transform', `translate(-${cityActive !== undefined ? ((cityActive.city.length) * 3) : 0}px,-15px)`)
      .style('visibility', d => d === cityActive ? 'visible' : 'hidden')
      .text(`${cityActive !== undefined ? cityActive.city : null}`)


    mapSVG.selectAll('.city')
      .selectAll('.rect-city-hover')
      .attr("width", `${cityHovered !== undefined ? cityHovered.city.length * 15 + 'px' : 0}`)
      .style('transform', `translate(-${cityHovered !== undefined ? (cityHovered.city === 'Lausanne' ? 41 + 'px' : cityHovered.city.length > 8 ? 57 + 'px' : cityHovered.city.length === 6 ? 31 + 'px' : cityHovered.city.length === 4 && cityHovered.city !== 'Chur' ? 22 + 'px' : cityHovered.city.length === 5 ? 26 + 'px' : cityHovered.city === 'Chur' ? 18 + 'px' : 40 + 'px') : 20 + 'px'},-40px)`)
      .style('visibility', d => d === cityHovered ? 'visible': 'hidden')

    mapSVG.selectAll('.city')
      .selectAll('.rect-city-active')
      .attr("width", `${cityActive !== undefined ? cityActive.city.length * 15 + 'px' : 0}`)
      .style('transform', `translate(-${cityActive !== undefined ? (cityActive.city === 'Lausanne' ? 41 + 'px' : cityActive.city.length > 8 ? 57 + 'px' : cityActive.city.length === 6 ? 31 + 'px' : cityActive.city.length === 4 && cityActive.city !== 'Chur' ? 22 + 'px' : cityActive.city.length === 5 ? 26 + 'px' : cityActive.city === 'Chur' ? 18 + 'px' : 40 + 'px') : 20 + 'px'},-40px)`)
      .style('visibility', d => d === cityActive ? 'visible' : 'hidden')

  }

  const setupCities = () => {
    const cityGroup = d3.select(svgRef.current).select('#cities')
      .selectAll('g')
      .data(citiesData).enter().append('g').attr('class', d => {
        return `city ${d.city} `
      })

    cityGroup.attr('transform', d => {
      return `translate(${d.x},${d.y})`
    })

    cityGroup.append('circle')
      .attr('r', 5)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('fill', 'white')
      .attr('class', 'inner-circle')

    cityGroup.append('circle')
      .attr('r', 13)
      .attr('cx', 13)
      .attr('cy', 13)
      .attr('opacity', 0.2)
      .attr('fill', 'white')
      .attr('class', 'outer-circle button')
      .on('click', d => setCityActive(d))
      .on('mouseover', d => setCityHovered(d))
      .on('mouseout', d => setCityHovered(undefined))

    cityGroup.append('text')
      .attr('class','text-city-active')
      .attr('fill', 'black')
      .attr('background-color', 'red')
      .attr('font-size', '1rem')
      .attr('font-weight', '700')
      .style('text-transform', 'uppercase')

    cityGroup.append('text')
      .attr('class','text-city-hover')
      .attr('fill', 'black')
      .attr('background-color', 'red')
      .attr('font-size', '1rem')
      .attr('font-weight', '700')
      .style('text-transform', 'uppercase')

    cityGroup.insert("rect", "text")
      .attr('class','rect-city-active')
      .attr("height", '40px')
      .style("fill", "#7EE2D1")

    cityGroup.insert("rect", "text")
      .attr('class','rect-city-hover')
      .attr("height", '40px')
      .style("fill", "white")


  }

  const initValuesForAnimation = () => {
    if (svgRef.current !== null) {
      const pathElements = Array.prototype.slice.call(svgRef.current.getElementsByTagName('polyline'))

      Array.from(pathElements).forEach(el => {
        let totalLength = el.getTotalLength().toString();
        el.style.strokeDasharray = totalLength;
        el.style.strokeDashoffset = totalLength;
        el.style.animationDuration = (props.animationDuration ? props.animationDuration : 4) + 's';
      })
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      initMap();
    }
    updateChart()
    initValuesForAnimation();
  })

  const getTravelTimesBars = () => {

    let citiesArray = cityActive.traveltimes

    interface Destination {
      startingPoint: string,
      time: number
    }

    const convertTimeToHours = (n: any) => {
      if (n > 60) {
        let num = n
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let pminutes = (hours - rhours) * 60;
        let rminutes = Math.round(pminutes);

        return [rhours + " STD " + rminutes + " MIN"]
      }
      return [n + " MIN"]

    }

    const calculateMaxTravelTime = (t: any) => {

      return Math.max.apply(Math, citiesArray.map(function(el: any) {
        return el.time;
      }))
    }

    return (
      citiesArray.map((el: Destination, i: Number) => {
        calculateMaxTravelTime(el.time)
        if (el.time === 0) {
          return null;
        }
        return (
          <div className='travel-distances' key={el.startingPoint}>
            <div className='icon-container'>
              <img src={iconTrain} alt='icon'/>
            </div>
            <div className='content-container'>
              <div className='label-container'>
                <h4>{el.startingPoint + " - " + cityActive.city}</h4>
                <h4>{convertTimeToHours(el.time)}</h4>
              </div>
              <div className='background-bar' style={{backgroundColor: "#5C6587"}}>
                <div className='active-bar' style={{width: el.time / calculateMaxTravelTime(el.time) * 100 + "%"}}/>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <div className='TravelingDistancePage'>
      <div className='ContentContainer'>
        <h2>Der Aargau is gut vernetzt</h2>
        <p><b>DER KANTON, der im Zentrum der Schweiz und Europas liegt.</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ipsum ac erat mattis, in imperdiet
          lectus sagittis. </p>

        <h3>Karte Einstellungnen</h3>

        <div className='chipWrapper'>
          <SelectionChip text={'Zug'}
                         onClick={() => [setTrainsVisible(!trainsVisible), setLegendeActive(!legendeActive)]}/>
          <SelectionChip text={'Seen'}
                         onClick={() => setLakesVisible(!lakesVisible)}/>
          <SelectionChip text={'Kantonen'}
                         onClick={() => setCantonsVisible(!cantonsVisible)}/>

        </div>
        <MapSVG ref={svgRef}/>
        <div className={`TravelingLegende ${legendeActive ? 'is-active' : ''}`}>
          <p className='Label'>Zugnetz</p>
          <div className='ColorPoint'/>
        </div>
        <div className='MapInfo'>*<i>Bei der Fahrt mit der Zug wird die schnellste Verbindung angezeigt.<br/> Bei der Fahrt mit dem Auto wird der schnellste Route mit dem Auto unter Berücksichtigung der Staufreiheit bei Einhaltung der Verkehrsregeln angezeigt.</i></div>

        {cityActive !== undefined ? getTravelTimesBars() : null}
      </div>

    </div>
  )
}
