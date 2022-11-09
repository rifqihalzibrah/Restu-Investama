import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from 'react-bootstrap/Stack';
import Location from "./Location.js";
import "./Home.css";

function HomeContact() {
    return (
        <div className="contact" id="contact">
            <Container>
                <Row className="contact-title">
                    <Col>Get In Touch</Col>
                </Row>
                <Row>
                    <Col>
                        <Stack gap={1}>
                            <div className="">Location</div>
                            <div><Location /></div>
                        </Stack>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" wight="5px" placeholder="Enter Messeage " />
                            </Form.Group>
                            <div><button className="Button">Send</button></div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeContact;