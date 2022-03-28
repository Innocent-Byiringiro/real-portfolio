import React from 'react';
import './Intro.css';


const intro = () => {
  return (
    <div className='intro'>
       <div className='intro-left'>
           <div className='intro-left-wrapper'>
               <h2 className='intro-intro'>Hello, My Name is</h2>
               <h1 className='intro-name'>Innocent Byiringiro</h1>
               <div className="intro-title">
                   <div className="intro-title-wrapper">
                       <div className="intro-title-item">Web Developer</div>
                       <div className="intro-title-item">Writer</div>
                       <div className="intro-title-item">Marketer</div>
                       <div className="intro-title-item">Marketer</div>
                       <div className="intro-title-item">Marketer</div>
                   </div>
               </div>
               <p className="intro-desc">
                   I design basic frontend websites and give them some really coool
                   designs and stuff. You can hire me by reaching out through the 
                   provided contacts down here.
               </p>
           </div>
       </div>
       <div className='intro-right'>
           <div className="intro-bg"></div>
           
       </div>
    </div>
  )
}

export default intro
