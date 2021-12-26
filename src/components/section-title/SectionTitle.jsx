import React from 'react';
import './sectionTitle.css';

const SectionTitle = ({title, textDirection}) => {
  return (
    <div className="section-title" style={{textAlign:textDirection}}>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
