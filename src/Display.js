import React from 'react'

function Display(props) {
  return (
    <div className='controller'>
        <div className='power'>
        <button className='power-btn on' onClick={props.powerClick} id='power-btn'><span id='power-span'></span></button><span>Power</span>
        </div>
        <div className='sample'>
            {props.power && <p className='name' id='display'>{props.name}</p>}
        </div>
        <input type='range' min={0} max={1} step={0.02} value={props.volume} onChange={props.volumeChange} className="volume-bar"/>
    </div>
  )
}

export default Display