import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './components/Banner/Banner.jsx'
import Card from './components/Card/Card.jsx'
import ShopingList from './components/ShopingList/ShopingList'
import './App.css'

function App() {

  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <ShopingList></ShopingList>
    </div>
  )
}

export default App
