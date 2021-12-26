import React from 'react'
import { SectionSubtitle, SectionTitle, Testimonial } from '../../components';
import testimonialAuthor1 from '../../assets/testimonial_author1.png'
import testimonialAuthor2 from '../../assets/testimonial_author2.png'
import testimonialAuthor3 from '../../assets/testimonial_author3.png'
import testimonialAuthor4 from '../../assets/testimonial_author4.png';
import testimonialDivider from '../../assets/testimonial_divider.png';
import "./testimonials.css";

const testimonials = [
  {
    description: "our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
    client_image:testimonialAuthor1,
    client_name:"cham",
    client_title:"product designer"
  },
  {
    description: "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
    client_image:testimonialAuthor2,
    client_name:"Scopic Software",
    client_title:"Custom IT Solutions Firm"
  },
  {
    description: "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
    client_image:testimonialAuthor3,
    client_name:"Russell Lee",
    client_title:"Writer"
  },
  {
    description: "At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.",
    client_image:testimonialAuthor4,
    client_name:"Solace Engineers Inc.",
    client_title:"Engineering Firm"
  },
];


const subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <SectionTitle title="Testimonials" textDirection="center" />
        <SectionSubtitle subtitle={subtitle} />
        <div className="testimonials__row">
          {testimonials.map( (testimonial, index) => <Testimonial key={index} testimonial={testimonial.description} clientAvatar={testimonial.client_image} clientName={testimonial.client_name} clientJobTitle={testimonial.client_title}/>)}
        </div>
        <div className="testimonials__divider">
          <img src={testimonialDivider} alt="testimonial divider" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
