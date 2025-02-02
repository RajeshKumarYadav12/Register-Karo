import React from 'react';
import './Blog.css';
import BlogCard from '../BlogCards/BlogCard';

import image1 from '../../assets/Image.png';
import image2 from '../../assets/Image1.png';
import image3 from '../../assets/Image2.png';
import image4 from '../../assets/Image3.png';
import image5 from '../../assets/Image4.png';
import image6 from '../../assets/Image5.png';

import Icon from '../../assets/arrow-up-right.png';
import ArrowIcon from '../../assets/Icon1.png';

const blogData = [
  {
    image: image1,
    author: 'Prabhash Mishra',
    date: '1 Jan 2023',
    title: 'Small Business & Startup',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Tax & Audit', 'Management'],
    icon: Icon
  },
  {
    image: image2,
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Tax', 'Research', 'Compliance'],
    icon: Icon
  },
  {
    image: image3,
    author: 'Rakshi Verma',
    date: '1 Jan 2023',
    title: 'Growing Business Package',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
    icon: Icon
  },
  {
    image: image4,
    author: 'Karan Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    tags: ['Money', 'Management'],
    icon: Icon
  },
  {
    image: image5,
    author: 'Richa Singh',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    tags: ['Tax Return', 'News', 'Audit'],
    icon: Icon
  },
  {
    image: image6,
    author: 'Miss Nora',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    tags: ['Private Limited Company', 'Customer Success'],
    icon: Icon
  }
];

const Blog = () => {
  return (
    <div className='blogs'>
      <div className="headBlog">
        <p>EXPLORE OUR BLOGS</p>
        <h2>Accelerate Digital Transformation</h2>
      </div>
      <div className="allCards">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <button className="expert-btn">
        Show more blogs <img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" />
      </button>
    </div>
  );
}

export default Blog;
