import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05, blog06} from './imports'

const Blog = () => {
  return (
    <div className='avenir__blog section-padding' id='blog'>
      <div className='avenir__blog-heading'>
        <h1 className='gradient__text'>A lot happens daily. Read about it.</h1>
      </div>
      <div className='avenir__blog-container'>
        <div className='avenir__blog-container_group'>
          <Article imageUrl={blog01} date='21st Oct, 2023' title='Mapping the world with Avenir.' />
          <Article imageUrl={blog02} date='21st Oct, 2023' title='Beats by Avenir.' />
          <Article imageUrl={blog03} date='23rd Oct, 2023' title='Avenir and its openAI is the future.' />
          <Article imageUrl={blog04} date='24th Oct, 2023' title='The truth about the Avenir codebase.' />
          <Article imageUrl={blog05} date='24th Oct, 2023' title='Spotlight: Avenir is always the solution.' />
          <Article imageUrl={blog06} date='25th Oct, 2023' title='Life on easy mode with the Avenir model.' />
        </div>
      </div>
    </div>
  )
}

export default Blog