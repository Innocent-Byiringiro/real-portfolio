import React from 'react'
import './About.css';
import Award from '../../img/linked.png';
import Aboutimg from '../../img/Image4.jpeg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
          <div className="about-card"></div>
          <div className="about-card">
              <img src={Aboutimg} alt="" className="about-img" />
          </div>
      </div>
      <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
              I design frontend using React JS.
          </p>
          <p className="about-desc">
              I am mostly familiar with Javascript langauge, and the HTML & CSS markup language. I take on various projects striving for excellence. 
          </p>
          <div className="about-award">
              <img src={Award} alt="" className="about-award-img" />
              <div className="about-award-texts">
                  <h4 className="about-award-title">A Certified Innovator 2020</h4>
                  <p className="award-desc">To top it all, I am certified in Entrepreneurship and Innovation trainings. </p>
              </div>
          </div>
          <div>
              <p>Check my Projects at this <a href="https://github.com/Innocent-Byiringiro">Github</a>    link</p>
          </div>
      </div>
    </div>
  )
}

export default About
