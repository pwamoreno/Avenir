import React from 'react'
import './whatavenir.css';
import { Feature } from '../../components';

const WhatAvenir = () => {
  return (
    <div className='avenir__whatavenir section__margin' id='whatisavenir'>
      <div className='avenir__whatavenir-feature'>
        <Feature 
          title='What is Avenir' 
          text='Avenir is a new cutting edge solution that aims to 
          make meaningful impacts in the the sphere of airtificial 
          intelligence. It combines various ideas from machine learning
          to data mining as well as neural networks to give cutting edge
          solutions, it also aims to push the limits of what is already
          known about artificial intelligence and break new grounds and
          influence new spheres where none thought the future of AI might
          go.'
        />
      </div>
      <div className='avenir__whatavenir-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='avenir__whatavenir-container'>
        <Feature 
          title='Chatbots' 
          text='Try our chatbots out to get a feel for what Avenir has to
          offer to the AI community, as well as other fields of discipline.'
        />
        <Feature 
          title='Knowledgebase' 
          text='You can find out what we are working on and what we are 
          hoping to improve on.'
        />
        <Feature 
          title='Education' 
          text='We offer a chance to learn and grow in the field of AI. We
          can set you on an exciting career path, so join us.'
        />
      </div>
    </div>
  )
}

export default WhatAvenir