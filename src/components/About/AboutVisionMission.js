import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import aboutImage from "../../assets/bg.png";

const AboutVisionMission = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true} className="about-vision-mission-align-vertical">
                        <Row>
                            <Col lg={true}>
                                <h2 className="font-2-left">VISION</h2> <hr />
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={true}>
                                <p className="font-4">A world-class active investment firm in Indonesia that promotes a strong business character to create value for stakeholders and the Indonesian nation.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true} className="mt-5">
                                <h2 className="font-2-left">MISSION</h2> <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                                <p className="font-4">Be a partner of choice for investors interested in participating in Indonesia's growth dynamics.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={true}>
                        <img className="responsive-image" src={aboutImage} alt="About Background" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutVisionMission;