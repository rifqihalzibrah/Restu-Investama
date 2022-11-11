import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../assets/bg.png'

const HomeAbout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true} className="home-about-align-vertical">
                        <h2 className="font-2 mb-3">ABOUT OUR COMPANY</h2>
                        <div className="font-4">
                            <p>PT. Restu Inti Nusa Abadi is an investment firm that provides various services by assisting the client to implement the corporate action on setting up the goals and structures strategically through public offering, merger & acquisition and restructuring.</p>
                        </div>
                        <div><Link to='/about'><button className="Button">Read More</button></Link></div>
                    </Col>
                    <Col lg={true}><img src={aboutImage} alt="About Background" className='responsive-image' /></Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomeAbout