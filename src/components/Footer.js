import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Container>
                <Row>
                    <Col>PT. RESTU INTI NUSA ABADI</Col>
                    <Col>Services</Col>
                    <Col>Contact</Col>
                </Row>
                <Row>
                    <Col>
                        <p>A world-class active investment firm in Indonesia that promotes a strong business character to create value for stakeholders and the Indonesian nation.</p>
                    </Col>
                    <Col>Services</Col>
                    <Col>Contact</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer