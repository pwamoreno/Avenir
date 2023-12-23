import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibilities.png';

const Possibility = () => {
  return (
    <div className='avenir__possibility section-padding' id='possibility'>
      <div className='avenir__possibility-image'>
        <img src={possibility} alt={possibility} />
      </div>
      <div className='avenir__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'> Avenir and Web3</h1>
        <p>Avenir introduces several key concepts and technologies, and blockchain is one of the critical components that underpin its nature.</p>
        <h4>Do something Great now.</h4>
      </div>
    </div>
  )
}

export default  Possibility