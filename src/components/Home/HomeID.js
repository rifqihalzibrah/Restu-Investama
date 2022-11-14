import React from 'react'
import './Home.css'
import HomeVisionMissionID from './HomeVisionMissionID.js'
import HomeServiceID from './HomeServiceID.js'
import HomeAboutID from './HomeAboutID.js'
import HomeContactID from './HomeContactID.js'

const HomeID = () => {
    return (
        <div>
            <div className='home-vision-mission area'>
                <HomeVisionMissionID />
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
                <HomeAboutID />
            </div>
            <div className='home-service background-color-home-service'>
                <HomeServiceID />
            </div>
            <div className='home-contact' id='contact'>
                <HomeContactID />
            </div>
        </div>
    )
}

export default HomeID