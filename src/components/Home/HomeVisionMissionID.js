import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Logo from '../../assets/Logo 1.png'



const HomeVisionMissionID = () => {

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
                    <Col className="pt-5">
                        <div>
                            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className='home-vision-mission-carousel'>
                                <Carousel.Item>
                                    <div className='carousel-card'>
                                        <h2>Sebuah perusahaan investasi aktif kelas dunia di Indonesia yang mengedepankan karakter bisnis yang kuat untuk menciptakan nilai bagi pemangku kepentingan dan bangsa Indonesia.</h2>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='carousel-card'>
                                        <h2>Menjadi mitra pilihan bagi investor yang tertarik untuk berpartisipasi dalam dinamika pertumbuhan Indonesia.</h2>
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

export default HomeVisionMissionID