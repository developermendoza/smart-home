import React from 'react'
import { SectionSubtitle, SectionTitle } from '../../components';
import union from "../../assets/union.png";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div id="subscribe">
      <div className="container">
        <div className="subscribe__container">
          <div className="subscribe__row">
            <div className="subscribe__col info">
              <SectionTitle title="Subscribe to get updated" />
              <SectionSubtitle subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque." />
            </div>
            <div className="subscribe__col button">
                <button>Get started</button>
            </div>
          </div>
          <img className="subscribe__union" src={union} alt="union" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
