import React from 'react';
import { SectionTitle, Faq } from '../../components';
import ellipse from '../../assets/ellipse-blue.png'
import "./faqs.css";

const tabs = [
  {
    title: "Lorem Ipsum is simply dummy text?",
    description: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    title: "It is a long established fact that a reader",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    title: "Lorem Ipsum is not simply random text",
    description: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
  },
  {
    title: "The standard chunk of Lorem Ipsum used since the 1500",
    description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
  },
  {
    title: "There are many variations of passages of Lorem Ipsum",
    description: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
  }
]


const Faqs = () => {
  return (
    <div id="faqs" className="faqs">
      <div className="container">
          <SectionTitle title="FAQ's" textDirection="center"/>
          <div className="faqs__tabs">
            <Faq tabs={tabs}/>
          </div>
      </div>
      <img className="faqs__ellipse" src={ellipse} alt="ellipse" />
    </div>
  )
}

export default Faqs
