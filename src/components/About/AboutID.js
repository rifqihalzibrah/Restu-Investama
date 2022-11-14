import React from 'react'
import './About.css'
import DescriptionID from './DescriptionID.js'
import AboutVisionMissionID from './AboutVisionMissionID.js'
import ValueID from './ValueID.js'
import CharacterID from './CharacterID.js'
import ManagementID from './ManagementID.js'

const AboutID = () => {
    return (
        <div>
            <div className='about-description'>
                <DescriptionID />
            </div>
            <div className='about-vision-mission'>
                <AboutVisionMissionID />
            </div>
            <div className='about-value py-5'>
                <ValueID />
            </div>
            <div className='about-character'>
                <CharacterID />
            </div>
            <div className='about-management'>
                <ManagementID />
            </div>
        </div>
    )
}

export default AboutID