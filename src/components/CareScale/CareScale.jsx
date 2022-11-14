import React from "react";

export default function CareScale(props){
  const scaleValue = props.scaleValue;
  const scaleType = props.scaleType

  const range = [1,2,3]
  const scaleLogo = scaleType === 'light' ? '☀️' : '💧'

  function evenValue(){
    if (scaleValue === 1) {
      alert(`peux ${scaleType}`)
    }else if (scaleValue === 2) {
      alert(`moyen ${scaleType}`)
    } else {
      alert(`beaucoup ${scaleType}`)
    }
  }

  return(
    <div onClick={evenValue}>
      {range.map((rangeE) => scaleValue >= rangeE ? <span key={rangeE}>{scaleLogo}</span> : null)}
    </div>
  )
}