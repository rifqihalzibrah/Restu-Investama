import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <div className="footer mt-5 py-3">
            <Container>
                <Row>
                    <Col><strong>© {year} PT. RESTU INTI NUSA ABADI</strong></Col>
                    <Col><strong>COMPANY</strong></Col>
                    <Col><strong>CONTACT</strong></Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Registration No.: <br />
                            License Number:
                        </p>
                    </Col>
                    <Col>
                        <div>
                            <Nav className="footer-link" as={Link} to='/about'>About Us</Nav>
                        </div>
                        <div>
                            <Nav className="footer-link" as={Link} to='/service'>Service</Nav>
                        </div>
                        <div>
                            <Nav className="footer-link" as={Link} to='/news'>News</Nav>
                        </div>
                    </Col>
                    <Col>
                        Jl. Arteri Pd. Indah No.10, RW.6, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Footer