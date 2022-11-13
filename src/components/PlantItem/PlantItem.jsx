import React from "react";
import CareScale from "../CareScale/CareScale";
import "./PlantItem.css"

export default function PlantItem(props){
  const water = props.water;
  const light = props.light;
  const name = props.name;
  const img = props.cover;
  

  return(
    <div >
      <p>{name}</p>
      <img className='lmj-plant-item-cover' src={img} alt="" />
      <CareScale scaleType='light' scaleValue={light}></CareScale>
      <CareScale scaleType='water' scaleValue={water}></CareScale>
    </div>
      
    
  )
}