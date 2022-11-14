import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/Logo 2.png'

const FooterID = () => {
    const current = new Date();
    const year = current.getFullYear();
    return (
        <div className="footer mt-5 py-3">
            <Container>
                <Row>
                    <Col><img className='logo-footer' src={Logo} alt="Logo"></img><span><strong>PT. RESTU INTI NUSA ABADI</strong></span></Col>
                </Row>
                <Row>
                    <Col lg={true} className="py-3">
                        <strong>© {year} RESTU INVESTAMA</strong>
                        <p>
                            Nomor Registrasi : <br />
                            Nomor Lisensi :
                        </p>
                    </Col>
                    <Col lg={true} className="py-3">
                        <strong>PERUSAHAAN</strong>
                        <div>
                            <Nav className="footer-link" as={Link} to='/id/tentang'>Tentang Kami</Nav>
                        </div>
                        <div>
                            <Nav className="footer-link" as={Link} to='/id/servis'>Servis</Nav>
                        </div>
                        <div>
                            <Nav className="footer-link" as={Link} to='/news'>Berita</Nav>
                        </div>
                    </Col>
                    <Col lg={true} className="py-3">
                        <strong>KONTAK</strong>
                        <p>Jl. Arteri Pd. Indah No.10, RW.6, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240</p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default FooterID