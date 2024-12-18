import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from "../../Data/testimonialsData"
import RightArrow from "../../asset/rightArrow (1).png"
import LeftArrow from "../../asset/leftArrow (1).png"
const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length;

    return (
        <div className='Testimonials'>
            <div className='blur'></div>
            <div className='Left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt=''></img>
                <div className='arrows'>

                    <img onClick={() => {
                        selected === 0
                            ? setSelected(tLength - 1)
                            : setSelected((prev) => prev - 1);
                    }} src={LeftArrow} alt=''></img>


                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }} src={RightArrow} alt=''></img>

                </div>
            </div>
        </div>
    )
}

export default Testimonials