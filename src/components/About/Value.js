import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Image from '../../assets/bg.png'

const Value = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className='value-title'>Our Values</div>
                </Row>
                <Row>
                    <Col>
                        <img src={Image} alt="Background" />
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <div className="value-title">Excellence</div>
                            <div className="value-description">
                                <p>Restu Investama provides an excellent services beyond the client expectation supported by the excellent team and infrastructure.
                                </p>
                            </div>
                            <div className="value-title">Innovative</div>
                            <div className="value-description">
                                <p>Aside from a qualified and effective best practices, Restu Investama provides an innovative means to strive the objcective of the client.
                                </p>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Value