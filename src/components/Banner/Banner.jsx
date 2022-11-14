import react, { Children } from 'react'
import logo from '../../assets/logo.png'
import './Banner.css'
function Banner(props) {
  const title = "La maison jungle"

  return(
    <div className="banner">
      <img src={logo} alt={title} className="imgBanner"></img>
      <h1 className="titleBanner">Banner</h1>
    </div>
  )
}

export default Banner