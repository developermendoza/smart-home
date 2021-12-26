import React from 'react';
import social from "../../assets/social.png";
import "./social.css";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const Social = () => {
  return (
    // <div className="social" style={{display:"flex", flexDirection:"column", position:"absolute", bottom:"-350px"}}> 
    <div className="social"> 
      <a><FaFacebookF/></a> 
      <a><FaInstagram/></a> 
      <a><FaTwitter/></a> 
      <a><FaLinkedinIn/></a> 
    </div>
  )
}

export default Social
