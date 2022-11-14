import React from 'react'
import { Link } from 'react-router-dom'


const Ads = () => {
    return (
        <div className='my-5'>
            <div className="ads-container">
                <h1>Company Name</h1>
                <p className='ads-description'>Company Mission Statement goes here</p>
                <Link className="btn-bgstroke">Call To Action</Link>
            </div>
        </div>
    )
}

export default Ads