import React from 'react';
import './Plan.css';
import { plansData } from '../../Data/plansData';
import whiteTick from "../../asset/whiteTick.png";

const Plan = () => {
    return (
        <div className='plans-container'>
            <div className='blur'></div>
            <div className='programs-header' style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className='plans'>
                {/* Loop through plansData and render each plan */}
                {plansData.map((plan, i) => {
                    return (
                        <div className='plan' key={i}>
                            {/* Plan icon */}
                            <div className='plan-icon'>{plan.icon}</div>

                            {/* Plan name and price */}
                            <span className='plan-name'>{plan.name}</span>
                            <span className='plan-price'>${plan.price}</span>

                            {/* Plan features */}
                            <div className='features'>
                                {plan.features.map((feature, j) => {
                                    return (
                                        <div className='feature' key={j}>
                                            <img src={whiteTick} alt='checkmark' />
                                            <span>{feature}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Optional Select Button */}
                            <div>
                                <span>See more benefits </span>
                            </div>
                            <button className='btn'>JOIN NOW</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Plan;
