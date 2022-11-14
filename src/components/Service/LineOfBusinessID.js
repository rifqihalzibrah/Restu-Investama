import React from 'react';
import Col from "react-bootstrap/Col";
import { Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import './Service.css'

const LineOfBusinessID = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true}>
                        <h1 className='font-1'>Lini Bisnis Kami</h1>
                    </Col>
                </Row>
                <Row className='service-padding-1'>
                    <Col lg={true}>
                        <span className="font-4-bold">
                            Restu Investama menawarkan layanan penasihat keuangan terkemuka dan terkemuka dan solusi keuangan inovatif termasuk pembiayaan Pra-IPO, restrukturisasi, IPO, Pembiayaan Saham, dan penasihat aksi korporasi.
                        </span>
                    </Col>
                </Row>
                <Row className='service-padding-card'>
                    <div className="cards-lob">
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title mt-3">PEMBIAYAAN SEBELUM IPO</h3>
                            </div>
                            <div className="mt-5">Restu Investama menanggung biaya keuangan untuk proses IPO klien termasuk biaya untuk biaya dukungan profesional dari langkah awal hingga tanggal listing.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title mt-3">PENAWARAN UMUM AWAL (IPO)</h3>
                            </div>
                            <div className="mt-5">Restu Investama membantu dan menyarankan proses penawaran saham baru atau saham lama dari perusahaan swasta untuk mengubah perusahaan menjadi perusahaan publik. Melalui proses IPO memungkinkan perusahaan menghimpun dana dari masyarakat.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title mt-3">RESTRUKTURISASI</h3>
                            </div>
                            <div className="mt-5">Proses restrukturisasi terdiri dari identifikasi dan penentuan area yang perlu direstrukturisasi diikuti dengan pembuatan rencana jangka pendek dan jangka panjang untuk memperbaiki kelemahan.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title mt-3">KEUANGAN SAHAM</h3>
                            </div>
                            <div className="mt-5">Di lini bisnis ini, Restu Investama sepenuhnya membantu klien untuk mendapatkan pembiayaan saham dari perusahaan penanaman modal asing. Prosesnya dimulai dari tahap awal hingga klien mengamankan dana.</div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LineOfBusinessID