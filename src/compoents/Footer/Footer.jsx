import React from 'react'
import './Footer.css'
import Github from "../../asset/github.png"
import Logo from "../../asset/logo1.png"
import instagram from "../../asset/instagram.png"
import LinkedIn from "../../asset/linkedin.png"
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='blur'></div>

            <hr />

            <div className='footer'>
                <div className='social-Links'>
                    <img src={Github} alt='' />
                    <img src={instagram} alt='' />
                    <img src={LinkedIn} alt='' />
                </div>

                <div className='Logo-f'>
                    <img src={Logo} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Footer