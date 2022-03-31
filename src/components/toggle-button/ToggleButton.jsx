import React, { useState } from 'react'
import './toggle-button.scss'

function ToggleButton() {

  const [toggle,setToggle] = useState(true)
  return (
    <div className='toggle' onClick={()=>{setToggle(prev=>!prev)}}>
      <input type="checkbox" checked={toggle}/> 
      <span className='slider round' ></span>
    </div>
  )
}

export default ToggleButton