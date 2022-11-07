import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import aboutImage from '../../assets/bg.png'

const HomeAbout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Stack gap={3}>
                            <div className="about-title">ABOUT OUR COMPANY</div>
                            <div className="about-description">
                                <p>PT. Restu Inti Nusa Abadi is an investment firm that provides various services by assisting the client to implement the corporate action on setting up the goals and structures strategically through public offering, merger & acquisition and restructuring.</p>
                            </div>
                            <div><button className="Button">Read More</button></div>
                        </Stack>
                    </Col>
                    <Col><img src={aboutImage} alt="About Background" /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeAbout