import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from "../../assets/bg.png";
import "./News.css";




const NewsHeadlights = () => {
    return (
        <div>
            <Container>
                <div><h1 className='font-1 pb-5'>NEWS</h1></div>
                <Row>
                    <Col lg={true}>
                        <img className="responsive-image" src={aboutImage} alt="About Background" />
                    </Col>
                    <Col lg={true} className="about-vision-mission-align-vertical pt-3">
                        <Row>
                            <Col lg={true}>
                                <h2 className="font-2-left">Lorem Ipsum</h2> <hr />
                            </Col>

                        </Row>
                        <Row className='left'>
                            <Col lg={true}>
                                <p className="font-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, officia id aliquam eveniet necessitatibus soluta suscipit sequi praesentium possimus dolores neque quae voluptas veniam ipsa..</p>
                            </Col>
                            <div><button className="Button">Read More</button></div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewsHeadlights