import React from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Contact = () => {
    return (
        <div>
            <h1 className='font-1 contact-title'>HUBUNGI KAMI</h1>
            <Container className="contact">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Alamat Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nama Perusahaan</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder='Pesan' as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div><button className="Button">Kirim</button></div>
                </Form>
            </Container>
        </div>
    )
}

export default Contact