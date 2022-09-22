import React from 'react'

function Pad(props) {
  return (
    <button className='drum-pad' id={props.id} onClick={props.handleClick} onKeyPress={props.handleKeyPress} disabled={props.power}>
        {props.keyTrigger}
        <audio src={props.url} id={props.keyTrigger} className='clip' muted={props.power}></audio>
    </button>
  )
}

export default Pad