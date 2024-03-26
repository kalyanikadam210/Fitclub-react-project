import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../asset/hero_image.e19ac0c6b1009c7280f5.png';
import hero_image_back from '../../asset/hero_image_back.png';
import Heart from '../../asset/heart.png'
import Calories from '../../asset/calories (1).png'


const Hero = () => {
  return (
    <div className='hero'>
    <div className='left-h'>

    <Header/>

    <div className='the-best-ad'>
    <div></div>
    <span>the best fitness club in the town</span>
    </div>

    <div className='hero-text'>
    <div>
    <span className='stroke-text'>Shape </span> 
    <span>Your</span>
    </div>

    <div>
    <span>Ideal body</span>
    </div>
    </div>

    <div>
    <span>In Here We Will Help You Shape And Build Your Ideail Body And Live Up Your Life To Fullest</span>
    </div>
    

    <div className='figures'>
    <div>
    <span>+140</span>
    <span>expert coachs</span>
    </div>
    <div>
    <span>+978</span>
    <span>members joined</span>
    </div>
    <div>
    <span>+50</span>
    <span>fitness program</span>
    </div>
    </div>


     <div className='hero-buttons'>
     <button className='btn'>Get Started</button>
     <button className='btn'>Learn More</button>
     </div>
     </div>


    <div className='right-h'>
   <button className='btn'>Join Now</button>
   <div className='heart-rate'>
   <img src={Heart} alt="" />
   <span>Heart Rate</span><span>116 bpm</span>
   </div>


   <img src={hero_image} alt='' className='hero-image' />
   <img src={hero_image_back} alt='' className='hero-image-back' />

   <div className='Calories'>
   <img src={Calories} alt="" />
   <span>Calories 220</span><span>burend kcal</span>
   </div>
    </div>
    </div>
   
  )
}

export default Hero;
