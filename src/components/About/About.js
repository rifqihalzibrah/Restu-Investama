import React from 'react'
import Description from './Description'
import AboutVisionMission from './AboutVisionMission'
import Value from './Value'
import Character from './Character'
import Management from './Management'

const About = () => {
    return (
        <div className='about'>
            <Description />
            <AboutVisionMission />
            <Value />
            <Character />
            <Management />
        </div>
    )
}

export default About