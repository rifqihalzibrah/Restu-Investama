import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Logo from '../../assets/Logo 1.png'



const VisionMission = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={8} className="vision-mission-title">
                        <div>RESTU INVESTAMA</div>
                    </Col>
                    <Col lg={true} className="vision-mission-logo">
                        <img src={Logo} className="vision-mission-logo-image" alt='logo'></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='vision-mission-carousel'>
                            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <div className='vision-mission-text'>
                                        <p>A world-class active investment firm in Indonesia that promotes a strong business character to
                                            create value for stakeholders and the Indonesian nation.</p>
                                        <button className="Button">About Us</button>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='vision-mission-text'>
                                        <p>Be a partner of choice for investors interested in participating in Indonesia's growth dynamics.</p>
                                        <button className="Button">About Us</button>
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

export default VisionMission