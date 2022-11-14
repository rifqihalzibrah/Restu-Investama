import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../assets/bg.png'

const HomeAboutID = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true} className="home-about-align-vertical">
                        <h2 className="font-2 mb-3">TENTANG PERUSAHAAN KAMI</h2>
                        <div className="font-4">
                            <p>PT. Restu Inti Nusa Abadi adalah perusahaan investasi yang menyediakan berbagai layanan dengan membantu klien untuk mengimplementasikan aksi korporasi dalam menetapkan tujuan dan struktur secara strategis melalui penawaran umum, merger & akuisisi dan restrukturisasi.</p>
                        </div>
                        <div><Link to='/about'><button className="Button">Baca selengkapnya</button></Link></div>
                    </Col>
                    <Col lg={true}><img src={aboutImage} alt="About Background" className='responsive-image' /></Col>
                </Row>
            </Container>
        </div >
    )
}

export default HomeAboutID