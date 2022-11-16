import react from 'react'
import { useState } from 'react'

export default function Card() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    const [card, updateCard ] = useState(0);
    const [isOpen, IsClose ] = useState(false)


    return (
        
        <div>
            {isOpen ?  
            <div className="card">
                <p onClick={()=> IsClose(false)}>fermer</p>
                <p onClick={()=> updateCard(0)}>vider</p>
                <h2>Panier</h2>
                <ul>
                    <li>Monstera : {monsteraPrice}€</li>
                    <li>Lierre : {ivyPrice}€</li>
                    <li>Fleurs : {flowerPrice}€</li>
                </ul>Total : {monsteraPrice + ivyPrice + flowerPrice }€
                <button onClick={()=> updateCard(card+1)}>ajouter </button>
                <p>total {monsteraPrice * card} €</p>
            </div>
            
            : <p onClick={()=> IsClose(true)}>ouvrir</p>}
        </div>
        
    )
}
