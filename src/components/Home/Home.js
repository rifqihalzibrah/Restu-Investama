import React from 'react'
import './Home.css'
import VisionMission from './VisionMission.js'
import HomeService from './HomeService.js'
import HomeAbout from './HomeAbout.js'
import Contact from './Contact.js'

const Home = () => {
    return (
        <div>
            <div className='vision-mission bg-danger'>
                <VisionMission />
            </div>
            <div className='about bg-success'>
                <HomeAbout />
            </div>
            <div className='service bg-warning'>
                <HomeService />
            </div>
            <div className='contact'>
                <Contact />
            </div>
        </div>
    )
}

export default Home