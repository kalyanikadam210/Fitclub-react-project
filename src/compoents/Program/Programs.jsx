import React from 'react'
import './Program.css'
import { ProgramsData } from "../../Data/programsData"
import RightArrow from '../../asset/rightArrow (1).png'
const Programs = () => {
  return (
    <div className='Programs' id="programs">
      <div className='programs-header'>
        <div className='blur'></div>
        <span className='stroke-text'>Explore our</span>
        <span>Program</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='program-categories'>
        {ProgramsData?.map((program) => (
          <div className='category' key={program.id}>
            {program.image ? (
              <img src={program.icon} alt={`${program.heading} icon`} />
            ) : (
              <div className='placeholder-icon'></div> // Optional placeholder
            )}
            <span>{program.icon}</span>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>Join Now</span>
              <img src={RightArrow} alt='Right Arrow' className='RightArrow' />
            </div>
          </div>
        ))}




      </div>
    </div>
  )
}

export default Programs
