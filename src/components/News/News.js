import React from 'react'
import NewsHeadlights from './NewsHeadlights';
import NewsRest from './NewsRest';
import "./News.css";

const News = () => {
    return (
        <div>
            <div className='headlights'>
                <NewsHeadlights />
            </div>
            <div className='news-rest'>
                <NewsRest />
            </div>
        </div>
    )
}

export default News