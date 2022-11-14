import React, { useState } from "react";

export default function questionForm(){
  const [inputValue, setInputValue] = useState("")

  function secketName(value){
    console.log(value);
    setInputValue(value);
  }


  return(
    <div>
      <p>{inputValue}</p>
      <form action="">
        <label htmlFor="">name</label>
        <input type="text" name="inputName" value={inputValue} onChange={(e) => secketName(e.target.value)}/>
        <button type="submit">entre</button>
      </form>
    </div>
  )
}