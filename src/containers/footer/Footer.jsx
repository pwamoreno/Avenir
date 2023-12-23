import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Step into the Future before anyone else.</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='' />
          <p>Jimeta R18 182 KM Minna, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contract</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Jimeta R18 182 KM Minna</p>
          <p>08123456789</p>
          <p>info@avenir.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>&#169; 2023 Avenir. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer