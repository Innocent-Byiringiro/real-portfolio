import React from 'react'
import './About.css';
import Award from '../../img/linked.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
          <div className="about-card"></div>
          <div className="about-card">
              {/* <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="about-img" /> */}
          </div>
      </div>
      <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
              It is a long established fact that those who
              read a catch topic will certainly respond.
          </p>
          <p className="about-desc">
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit.
               Natus dolores quia ullam voluptatum eligendi dolor adipisci incidunt velit veritatis laborum!
              A architecto sequi illo inventore necessitatibus recusandae magnam molestiae! Optio.
          </p>
          <div className="about-award">
              <img src={Award} alt="" className="about-award-img" />
              <div className="about-award-texts">
                  <h4 className="about-award-title">Best Designer 2022</h4>
                  <p className="award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae sunt autem nostrum maiores ratione officia neque itaque sequi quaerat beatae corrupti voluptatibus, aliquid rerum accusamus nulla consectetur maxime quo.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About
