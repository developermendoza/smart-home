import React from 'react';
import appstore from '../../assets/app_store.png';
import googleplay from '../../assets/google_play.png';
import './app-download.css';

const AppDownload = () => {
  return (
    <div className="container">
      <div className="app-download">
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
