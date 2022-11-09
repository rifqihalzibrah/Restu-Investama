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
                <Row className="about-vision-mission-title">Our Vision & Mission</Row>
                <Row>
                    <Col>
                        <Stack gap={2}>
                            <div className="about-vision-mission-title">Vision</div>
                            <div className="about-vision-mission-text">A world-class active investment firm in Indonesia that promotes a strong business character to create value for stakeholders and the Indonesian nation.</div>
                            <div className="about-vision-mission-title">Mission</div>
                            <div className="about-vision-mission-text">Be a partner of choice for investors interested in participating in Indonesia's growth dynamics.</div>
                        </Stack>
                    </Col>
                    <Col>
                        <img src={aboutImage} alt="About Background" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutVisionMission;