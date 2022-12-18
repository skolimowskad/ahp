import React from 'react'
import './Slidery.css'
import 'react-slider'
import ReactSlider from 'react-slider'

export default function Slidery(props) {
  return (
    <div className='kontenerSlidery'>
      <div className='wiersz'>
        <h2 className='sliderText'>{props.startName}</h2>
        <ReactSlider 
          className='slider'
          trackClassName='sliderTrack'
          thumbClassName='sliderThumb'
          min={0}
          max={170}
          defaultValue={0}
          value={props.sliderValue}
          onChange={(value)=>props.setSliderValue(value)}
        />
        <h2 className='sliderText'>{props.endName}</h2>
      </div>       
    </div>
  )
}
