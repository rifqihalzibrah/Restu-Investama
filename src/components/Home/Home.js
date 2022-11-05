import React from 'react'
import './Home.css'
import Vision from './Vision.js'
import Mision from './Mision.js'
import HomeAbout from './HomeAbout.js'
import HomeService from './HomeService.js'
import Contact from './Contact.js'

const Home = () => {
    return (
        <div>
            <Vision />
            <Mision />
            <HomeAbout />
            <HomeService />
            <Contact />
        </div>
    )
}

export default Home