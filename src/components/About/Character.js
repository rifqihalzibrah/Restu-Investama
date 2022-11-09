import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Character = () => {
    return (
        <div>
            <Container>
                <Row className='character-title justify-content-md-center'>Our Company Characters</Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title>Integrity</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title>Passion and Energy</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src="" alt="" />
                            <Card.Body>
                                <Card.Title>Compotence and Capability</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Character