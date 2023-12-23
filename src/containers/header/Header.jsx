import React from 'react';
import './header.css';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='avenir__header section-padding' id='home'>
      <div className='avenir__header-content'>
        <h1 className='gradient__text'>Build Something amazing with Avenir OpenAI</h1>
        <p>
          The world is in the palm of your hands with Avenir's openAI. So what
          are you going to build? From inspirations and pratical steps to execution,
          Avenir is here to help.
        </p>
        <div className='avenir__header-content__input'>
          <input type='email' placeholder='Your email Address'/>
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='avenir__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header