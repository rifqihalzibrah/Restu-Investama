import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const HomeService = () => {
    return (
        <div>
            <Container className='home-service-align-vertical'>
                <Row>
                    <Stack gap={2}>
                        <h2 className="font-2 mb-3">WHAT WE DO</h2>
                        <div className="font-4">
                            <p>Restu Investama provides an integrated services related to corporate action consist of Equity fund raising both public and private offerings, Debt financing both public and private offerings, Leveraged deals for corporate bank financing, Share financing, Corporate finance advisory, Corporate  restructuring, Private equity financing. With the support of corporate finance specialist that is acknowledged as a professional with a wide range of experience and outstanding track record, Restu Investama is confident to serve clients with a solution based services.
                            </p>
                        </div>
                    </Stack>
                </Row>
                <Row>
                    <Col>
                        <Link className='service-link' to='/service'>Our Strategy</Link>
                    </Col>
                    <Col>
                        <Link className='service-link' to='/service'>Our Credential</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeService