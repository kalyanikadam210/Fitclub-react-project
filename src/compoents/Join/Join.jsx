import React from 'react'
import './Join.css';
import { useRef } from 'react'


const Join = () => {
    const form = useRef()

    return (
        <div className='Join' id='Join-us'>
            <div className='Left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span className='stroke-text'>YOUR BODY </span>

                    <span> WITH US?</span>
                </div>

            </div>
            <div className='right-j'>
                <form ref={form} className='email-container' >
                    <input type='email' name='user email' placeholder='Enter your Email address'></input>
                    <button className='btn btn-j'>Join Now</button>

                </form>
            </div>
        </div>
    )
}

export default Join