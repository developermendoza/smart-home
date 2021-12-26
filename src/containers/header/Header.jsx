import React from 'react'
import { Navbar } from '../../components'
import ellipse from "../../assets/ellipse.png";
import hero from '../../assets/hero.png';
import Social from '../../components/social/Social';
import heroLines from "../../assets/hero-lines.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header" style={{backgroundImage:`url(${heroLines})`, backgroundSize:"auto", backgroundPosition:"center", backgroundRepeat:"no-repeat", position:"relative"}}>
      <img style={{position:"absolute", right:"0", top:"0"}} src={ellipse} alt="ellipse" />
      <div className="container">
        <div className="header__top-container">
          <Navbar />
        </div>
        <div className="header__hero-heading">
          <h1>Smart Home Application</h1>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text and a search for 'lorem ipsum' will uncover many web sites still </p>
        </div>
        
        <div className="header__hero-image">
          <img src={hero} alt="hero" />
        </div>
        <Social />
      </div>
      
    </div>
  )
}

export default Header
