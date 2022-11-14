import React from "react";
import { useState } from "react";


export default function Footer(){
  const [inputValue, setInputValue] = useState('')

  function handleValue(e){
    setInputValue(e.target.value)
  }

  function handleBuld(){
    if (!inputValue.includes('@')) {
      alert("addresse pa valide")
    }else{
      console.log('valide');
    }
  }


  return(
    <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵 {inputValue}
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <label htmlFor="">email :</label>
      <input type="text" 
        placeholder="email stp"
        onChange={handleValue}
        onBlur={handleBuld}
        value={inputValue}
      />  
		</footer>
  )
}