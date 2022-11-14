import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './components/Banner/Banner.jsx'
import Card from './components/Card/Card.jsx'
import ShopingList from './components/ShopingList/ShopingList.jsx'
import QuestionForm from './components/questionForm/questionForm.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Banner> </Banner>
      <Card></Card>
      <ShopingList></ShopingList>
      <QuestionForm></QuestionForm>
      <Footer></Footer>
    </div>
  )
}

export default App
