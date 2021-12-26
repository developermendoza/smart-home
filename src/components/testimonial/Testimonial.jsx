import React from 'react';
import "./testimonial.css";

const Testimonial = ({testimonial, clientAvatar, clientName, clientJobTitle}) => {
  return (
    <div className="testimonial">
      <div className="testimonial__description">
      {testimonial}
      </div>
      <div className="testimonial__author">
        <img src={clientAvatar} alt="client avatar"/>
        <div>
          <p className="testimonial__author-name">{clientName}</p>
          <p className="testimonial__author-title">{clientJobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
