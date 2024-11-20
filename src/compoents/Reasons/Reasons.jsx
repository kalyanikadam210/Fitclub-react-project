import React from 'react'
import './Reasons.css'
import Image1 from "../../asset/image1.1091417d32e491f0bbb6.png"
import Image2 from "../../asset/image2.82da8b2725df896d8a8e.png"
import Image3 from "../../asset/image3.69484cb0ee7687a8c28b.png"
import Image4 from "../../asset/image4.2c0d30b9ce1579eb1109.png"

import nb from '../../asset/nb.png'
import adidas from "../../asset/adidas (1).png"
import nike from "../../asset/nike.png"
import tick from "../../asset/tick.png"




const Reasons = () => {
    return (
        <div className='Reasons' id='reasons'>
            <div className='blur'></div>
            <div className='Left-r'>

                <img src={Image1} alt='' />
                <img src={Image2} alt='' />
                <img src={Image3} alt='' />
                <img src={Image4} alt='' />

            </div>
            <div className='right-r'>
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>

                <div className='details-r'>


                    <div><img src={tick} alt=""></img>
                        <span>OVER 140+ EXPORT COACHS</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>TRAIN SNARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div><img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>


                <span
                    style={{
                        color: "var(--gray)",
                        fontWeight: "normal",

                    }}


                > OUR PARTNERS

                </span>

                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />


                </div>
            </div>


        </div>

    )
}

export default Reasons