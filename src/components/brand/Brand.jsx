import React from 'react';
import './brand.css';
import { adler, bike, gladiator, rational, six } from './import';

const Brand = () => {
  return (
    <div className='avenir__brand section__padding'>
      <div>
        <img src={adler} alt='adler'/>
      </div>
      <div>
        <img src={bike} alt='bike'/>
      </div>
      <div>
        <img src={gladiator} alt='gladiator'/>
      </div>
      <div>
        <img src={rational} alt='rational'/>
      </div>
      <div>
        <img src={six} alt='six'/>
      </div>
    </div>
  )
}

export default Brand