import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, author, date, title, description, tags, icon }) => {
  return (
    <div className='blogcard'>
      <img src={image} alt={title} className='blog-image' />
      <div className='blog-content'>
        <p className='blog-author'>{author} • {date}</p>
        <div className='blog-title-container'>
          <h3 className='blog-title'>{title}</h3>
          <img src={icon} alt="Icon" className='blog-icon' />
        </div>
        <p className='blog-description'>{description}</p>
        <div className='blog-tags'>
          {tags.map((tag, index) => (
            <span key={index} className='blog-tag'>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
