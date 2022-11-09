import React from 'react'
import './Home.css'
import HomeVisionMission from './HomeVisionMission.js'
import HomeService from './HomeService.js'
import HomeAbout from './HomeAbout.js'
import HomeContact from './HomeContact.js'

const Home = () => {
    return (
        <div>
            <div className='vision-mission bg-danger'>
                <HomeVisionMission />
            </div>
            <div className='home-about bg-success' id='home-about'>
                <HomeAbout />
            </div>
            <div className='home-service bg-warning'>
                <HomeService />
            </div>
            <div className='contact' id='contact'>
                <HomeContact />
            </div>
        </div>
    )
}

export default Home