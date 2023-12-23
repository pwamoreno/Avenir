import React from 'react';
import './article.css';

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className='avenir__blog-container_article'>
      <div className='avenir__blog-container_article-image'>
        <img src={imageUrl} alt='blog'/>
      </div>
      <div className='avenir__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default Article