import React from 'react'
import Pad from './Pad'
import Display from './Display'
import {bank1} from './data'
import './styles.css'

function App() {
    const [power,setPower] = React.useState(true)
    const [pads,setPads] = React.useState([])
    const [name,setName] = React.useState('')
    const [volume,setVolume] = React.useState(1)
    function togglePower(){
        setPower(prevState => !prevState)
        setName('')
        if(!power){
            document.getElementById('power-btn').classList.add("on")
            // document.getElementById('power-span').classList.add("on")
        }
        else {
            document.getElementById('power-btn').classList.remove("on")
            // document.getElementById('power-span').classList.remove("on")
        }
        
    }
    React.useEffect(function(){
        setPads(bank1.map(item => {
            return <Pad key={item.id} keyTrigger= {item.keyTrigger} id={item.id} url={item.url} handleClick={()=>handleClick(item.keyTrigger,item.id)} power={!power}/>
        }))
        
    },[power,volume])
    React.useEffect(() => {
        document.addEventListener("keydown",handleKeydown)
        return ()=>{
            document.removeEventListener("keydown",handleKeydown)
        }
    },[volume])


    function handleKeydown(event){
            event.preventDefault()
            let id=event.key.toUpperCase()
            let keyItem= bank1.filter(item => item.keyTrigger===id)
            // console.log(id)
            if (keyItem.length >0){
                let keyName=keyItem[0].id
                document.getElementById(keyName).classList.add("active")
                document.getElementById(keyName).click()
                setTimeout(()=>document.getElementById(keyName).classList.remove("active"),100)
                
            }
        
    }
    function handleClick(id,name){
        // console.log(volume)
        document.getElementById(id).volume = volume
        document.getElementById(id).play()
        setName(name)
    }
    function volumeChange(event){
        setVolume(event.target.valueAsNumber)
    }
  return (
    <div className='main' id='drum-machine'>
        <div className='pads-container'>
            {pads}
        </div>
        <Display powerClick={togglePower} power={power} name={name} volume={volume} volumeChange={volumeChange}/>
    </div>
  )
}

export default App