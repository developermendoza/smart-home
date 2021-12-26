import React from 'react';
import "./about.css";
import { SectionTitle } from '../../components';
import iphone1 from '../../assets/about_iphone1.png'
import iphone2 from '../../assets/about_iphone2.png'
import iphone3 from '../../assets/about_iphone3.png'
import miscImage from '../../assets/misc-design2.png'

const About = () => {
  return (
    <div className="about" id="about">
    <img className="about__bg-img" src={miscImage} alt="" />
    <div className="container">
      <SectionTitle title="About us" textDirection="center"/>
      <div className="about__section row">
        <div className="about__section-img col"> 
          <div className="about__section-rectangle">
            <img src={iphone1} alt="about img1" />
          </div>
        </div>
        <div className="about__section-description col">
          <h3>Smart Home’s  Smart Services</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="about__section row reverse">
        <div className="about__section-img col"> 
          <div className="about__section-rectangle">
            <img src={iphone2} alt="about img1" />
          </div>
        </div>
        <div className="about__section-description col">
          <h3>What app can do to your Appliences</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="about__section row">
        <div className="about__section-img col"> 
          <div className="about__section-rectangle">
            <img src={iphone3} alt="about img1" />
          </div>
        </div>
        <div className="about__section-description col">
          <h3>Control Electric Appliences</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default About
