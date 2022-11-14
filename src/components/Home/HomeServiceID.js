import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const HomeServiceID = () => {
    return (
        <div>
            <Container className='home-service-align-vertical'>
                <Row>
                    <Stack gap={2}>
                        <h2 className="font-2 mb-3">KEGIATAN KAMI</h2>
                        <div className="font-4">
                            <p>Restu Investama menyediakan layanan terintegrasi terkait aksi korporasi yang terdiri dari Penggalangan dana ekuitas baik penawaran publik dan swasta, Pembiayaan hutang baik penawaran publik dan swasta, Leveraged deal untuk pembiayaan bank korporasi, Pembiayaan saham, Penasihat keuangan perusahaan, Restrukturisasi perusahaan, Pembiayaan ekuitas swasta. Dengan dukungan spesialis keuangan perusahaan yang diakui sebagai profesional dengan berbagai pengalaman dan rekam jejak yang luar biasa, Restu Investama percaya diri untuk melayani klien dengan layanan berbasis solusi.
                            </p>
                        </div>
                    </Stack>
                </Row>
                <Row>
                    <Col>
                        <div className='container-service-link'><Link className='service-link' to='/id/servis'><h4>STRATEGI KAMI</h4></Link></div>
                    </Col>
                    <Col>
                        <div className='container-service-link'><Link className='service-link' to='/id/servis'><h4>KREDENSIAL KAMI</h4></Link></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeServiceID