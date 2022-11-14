import React from "react";
import { plantList } from "../../Data/data.js"
import CareScale from "../CareScale/CareScale.jsx";
import PlantItem from "../PlantItem/PlantItem.jsx";
import imgDefault from "../../assets/monstera.jpg"
import "./ShopingList.css"

export default function ShopingList(){
  return(
    <div className="listItem">
      {plantList.map(({name,id,light,water,isSpecialOffer})=>(
        <ul key={id} className="lmj-plant-list">       
          <PlantItem 
            name = {name}
            cover = {imgDefault}
            id = {id}
            light = {light}
            water = {water}
            solde = {isSpecialOffer}
            ></PlantItem>
        </ul>
      ))}
    </div>
  )
}