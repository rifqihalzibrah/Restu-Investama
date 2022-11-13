import React from 'react'
import './Home.css'
import HomeVisionMission from './HomeVisionMission.js'
import HomeService from './HomeService.js'
import HomeAbout from './HomeAbout.js'
import HomeContact from './HomeContact.js'

const Home = () => {
    return (
        <div>
            <div className='home-vision-mission area'>
                <HomeVisionMission />
                <div>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className='home-about' id='home-about'>
                <HomeAbout />
            </div>
            <div className='home-service background-color-home-service'>
                <HomeService />
            </div>
            <div className='home-contact' id='contact'>
                <HomeContact />
            </div>
        </div>
    )
}

export default Home