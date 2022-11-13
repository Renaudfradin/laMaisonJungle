import React from "react";

export default function CareScale(props){
  const scaleValue = props.scaleValue;
  const scaleType = props.scaleType

  const range = [1,2,3]
  const scaleLogo = scaleType === 'light' ? '☀️' : '💧'

  return(
    <div>
      {range.map((rangeE) => scaleValue >= rangeE ? <span key={rangeE}>{scaleLogo}</span> : null)}
    </div>
  )
}