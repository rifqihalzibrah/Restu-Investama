import React from 'react'
import './About.css'
import Description from './Description'
import AboutVisionMission from './AboutVisionMission'
import Value from './Value'
import Character from './Character'
import Management from './Management'

const About = () => {
    return (
        <div>
            <div className='about-description'>
                <Description />
            </div>
            <div className='about-vision-mission'>
                <AboutVisionMission />
            </div>
            <div className='about-value'>
                <Value />
            </div>
            <div className='about-character'>
                <Character />
            </div>
            <div className='about-management'>
                <Management />
            </div>
        </div>
    )
}

export default About