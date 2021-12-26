import React from 'react';
import { SectionSubtitle, SectionTitle } from '../../components';
// import appStore from "../../assets/applestore.png";
// import appstore from '../../assets/appstore.png';
import appstore from '../../assets/app_store.png';
import googleplay from '../../assets/google_play.png';
import iphone1 from "../../assets/about_iphone1.png";
import "./download-app.css";

const subtitle = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
const DownloadApp = () => {
  return (
    <div id="downloadApp" className="download-app">
      <div className="container">
      <div className="download-app__row">
        <div className="download-app__col appstore">
          <SectionTitle title="Download App" />
          <SectionSubtitle subtitle={subtitle}/>
          <div className="download-app__app-container">
          <img className="download-app__appstore" src={appstore} alt="app store" />
          <img className="download-app__appstore" src={googleplay} alt="google play" />
          </div>
          
        </div>
        <div className="download-app__col iphone">
          <img className="download-app__iphone" src={iphone1} alt="iphone" />
        </div>
      </div>
        
      </div>
    </div>
  )
}
export default DownloadApp
