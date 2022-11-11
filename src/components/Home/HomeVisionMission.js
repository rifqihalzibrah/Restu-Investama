import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Logo from '../../assets/Logo 1.png'



const HomeVisionMission = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={8} className="my-auto">
                        <h1 className="font-1">RESTU INVESTAMA</h1>
                    </Col>
                    <Col lg={true} className="home-vision-mission-logo">
                        <img src={Logo} className="home-vision-mission-logo-image" alt='logo'></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className='home-vision-mission-carousel'>
                                <Carousel.Item>
                                    <div className='carousel-card'>
                                        <h2>A world-class active investment firm in Indonesia that promotes a strong business character to
                                            create value for stakeholders and the Indonesian nation.</h2>
                                        <a href='#home-about'><button className="Button">About Us</button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='carousel-card'>
                                        <h2>Be a partner of choice for investors interested in participating in Indonesia's growth dynamics.</h2>
                                        <a href='#home-about'><button className="Button">About Us</button></a>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeVisionMission