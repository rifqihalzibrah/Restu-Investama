import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Value = () => {
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col lg={true} className=" value-align-vertical pb-5"><h2 className='font-2'>OUR VALUES</h2></Col>
                    <Col lg={true}>
                        <h2 className="font-2">Excellence</h2>
                        <p className="font-4">
                            Restu Investama provides an excellent services beyond the client expectation supported by the excellent team and infrastructure.
                        </p>
                        <h2 className="font-2">Innovative</h2>
                        <p className="font-4">
                            Aside from a qualified and effective best practices, Restu Investama provides an innovative means to strive the objcective of the client.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Value