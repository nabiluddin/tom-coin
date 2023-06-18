import React from 'react'
import './About.scss'
import bglight from '../../assets/bglight.png';
import cats from '../../assets/cats.png';

function About() {
  return (
    <div className='upper'>
      <div className="abackBox">
        <img src={bglight} alt="bgpic" className='bgpic' />
        <div className="main">
          <div className="content-about">
            <p className='p-text'>About Us</p>
            <p className='pp'>The Future of Meme-Making At DOGEAI, we're committed to pushing the boundaries of what's possible with meme-making. Our team of experts is always working to improve our AI technology, ensuring that you have access to the latest and greatest tools for creating the perfect meme.</p>
            <p className='pp'>With DOGEAI, you can take your meme-making skills to the next level and create content that stands out from the crowd. Whether you're a seasoned meme-maker or just getting started, DOGEAI has everything you need to succeed.</p>
            <p className='pp'>Join the DOGEAI Community Today </p>
            <p className='pp'>Ready to start creating your own memes with DOGEAI? Sign up today and join the thousands of creators who are already using our platform to bring their ideas to life. With DOGEAI, the possibilities are endless – so why wait? Join the revolution and start making memes that will have the internet talking!</p>
          </div>
        <img src={cats} alt="cats" className='cats'/>
        </div>
      </div>
    </div>
  )
}

export default About
