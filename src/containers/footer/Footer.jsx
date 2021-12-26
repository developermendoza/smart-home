import React from 'react'
import Logo from '../../components/logo/Logo'
import moment from "moment";
import "./footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <div id="footer" className="footer">
      <div className="container" >
          <div className="footer__row">
              <div className="footer__col logo__col">
                <Logo />
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                <div className="footer__email">
                  <p>smarthome@email.com</p>
                  <button>Register</button>
                </div>
              </div>
              <div className="footer__col">
                <h4>CATEGORIES</h4>
                <ul>
                  <li>Product Management</li>
                  <li>Design / Creative</li>
                  <li>Education & Training</li>
                  <li>UI/UX Designers</li>
                  <li>Development</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              <div className="footer__col">
              <h4>ABOUT</h4>
                <ul>
                  <li>About Us</li>
                  <li>Partnerships</li>
                  <li>Finance Experts</li>
                  <li>Project Management</li>
                  <li>Product Manager</li>
                  <li>The Team</li>
                </ul>
              </div>
              <div className="footer__col">
              <h4>Follow Us</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
          </div>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; {moment(today).format("YYYY")} all rights reserved smartHome</small>
      </div>
    </div>
  )
}

export default Footer
