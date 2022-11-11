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
        <div className="contact">
            <Container>
                <Row className="mb-3">
                    <Col lg={true}>
                        <div>
                            <h2 className="font-2">GET IN TOUCH</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <div className="font-2">
                            <h2>Location</h2>
                        </div>
                    </Col>
                    <Col lg={true}></Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <Stack gap={1} className="pb-5">
                            <div><Location /></div>
                        </Stack>
                    </Col>
                    <Col lg={true}>
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