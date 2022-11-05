import React from 'react'
import './Home.css'
import Vision from './Vision.js'
import Mision from './Mision.js'
import HomeService from './HomeService.js'
import HomeAbout from './HomeAbout.js'
import HomeTeam from './HomeTeam.js'
import Credential from './Credential.js'
import Contact from './Contact.js'

const Home = () => {
    return (
        <div>
            <Vision />
            <Mision />
            <HomeService />
            <HomeAbout />
            <HomeTeam />
            <Credential />
            <Contact />
        </div>
    )
}

export default Home