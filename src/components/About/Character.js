import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Character = () => {
    return (
        <div>
            <Container>
                <Row className='justify-content-md-center mb-5'>
                    <h2 className='font-2'>OUR COMPANY CHARACTERS</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={true}>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title className='font-3'>Integrity</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={true}>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title className='font-3'>Passion and Energy</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={true}>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title className='font-3'>Compotence and Capability</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Character