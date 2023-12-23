import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featureData = [
  {
    title: 'Improve Work Efficiency',
    text: 'Save time on tedious tasks with Avenir. Get the most out of any work scenario by relying on the tools avenir provides.'
  },
  {
    title: 'Become More Productive',
    text: 'It is expected that with higher efficiency, not only can you work faster but you can also leverage your time to be more productive. With Avenir working becomes seamless and easy.'
  },
  {
    title: 'Learn As You Go',
    text: 'Avenir aims to help your growth especially in areas you find yourself to deficient in. Leveraging the information that can be foud in our OpenAI, you can learn as you work. That is the beauty of Avenir.'
  },
  {
    title: 'Enjoy The Experience',
    text: 'At the end of the day, one should be able to enjoy using our solutions, despite whatever field or sphere you find yourself. So enjoy, the future is now.'
  }
]

const Features = () => {
  return (
    <div className='avenir__features section-padding' id='features'>
      <div className='avenir__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Only Just Need To Realize it. Make It Happen. Step Into The Future Today.
        </h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className='avenir__features-container'>
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features