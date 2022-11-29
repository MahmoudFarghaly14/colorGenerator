import React, { useEffect, useState } from 'react'
import './SingleColor.css'
import rgbToHex from './Utils'
const SingleColor = ({rgb,weight,index}) => {
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
   
  
  return (
    <div 
        className={`color ${index > 10 && 'lightColor'}`} 
        style={{backgroundColor:`rgb(${bcg})`}}>
        <span>{hex}</span><br></br>
        <span>{weight}%</span>
        <p 
            onClick={()=>{
                navigator.clipboard.writeText(hex)
            }}>
            copied to clipboard
        </p> 
    </div>
  )
}

export default SingleColor