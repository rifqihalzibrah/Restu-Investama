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
                <Row>
                    <Col lg={true}>
                        <div className="card-ourcomp card-1-ourcomp">
                            <div>
                                <h3 className="card__title">Integrity</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="card-ourcomp card-1-ourcomp">
                            <div>
                                <h3 className="card__title">Passion and Energy</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="card-ourcomp card-1-ourcomp">
                            <div>
                                <h3 className="card__title">Compotence and Capability</h3>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Character