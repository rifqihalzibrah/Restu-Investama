import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './Service.css'

import aboutImage from "../../assets/bg.png";

const CorporateActionID = () => {
    const [visibleWithBackdropPreIPO, setVisibleWithBackdropPreIPO] = useState(false)
    const [visibleWithBackdropIPO, setVisibleWithBackdropIPO] = useState(false)
    const [visibleWithBackdropPostIPO, setVisibleWithBackdropPostIPO] = useState(false)

    const handleClosePreIPO = () => setVisibleWithBackdropPreIPO(false);
    const handleShowPreIPO = () => setVisibleWithBackdropPreIPO(true);
    const handleCloseIPO = () => setVisibleWithBackdropIPO(false);
    const handleShowIPO = () => setVisibleWithBackdropIPO(true);
    const handleClosePostIPO = () => setVisibleWithBackdropPostIPO(false);
    const handleShowPostIPO = () => setVisibleWithBackdropPostIPO(true);


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true}>
                        <h2 className="font-2">PENASIHAT AKSI PERUSAHAAN</h2>
                    </Col>
                </Row>
                <Row className='service-padding-1'>
                    <Col lg={true}>
                        <div>
                            <p className='font-4-bold'>Restu Investama membantu dan memberi saran proses aksi korporasi untuk perusahaan tercatat termasuk penerbitan hak dan penggalangan dana alternatif lainnya.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mx-auto'>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowPreIPO}>
                            <h3>PRE-IPO</h3>
                            <p className='font-4'>Pra-IPO, atau penawaran umum pra-initial, adalah cabang dari investasi ekuitas swasta yang berkonsentrasi pada...</p>
                            <span className="link-text">
                                View More
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowIPO}>
                            <h3>IPO</h3>
                            <p className='font-4'>IPO adalah penjualan publik di mana perusahaan menjual saham kepada investor institusi serta biasanya kepada investor individu ritel...</p>
                            <span className="link-text">
                                View More
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowPostIPO}>
                            <h3>POST-IPO</h3>
                            <p className='font-4'>Pasca-IPO mengacu pada periode setelah penawaran umum perdana saham perusahaan yang menandai masuknya ke pasar keuangan ekuitas...</p>
                            <span className="link-text">
                                View More
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Offcanvas show={visibleWithBackdropPreIPO} onHide={handleClosePreIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Pra IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    <div>
                        <p>Pra-IPO, atau penawaran umum pra-awal, adalah cabang investasi ekuitas swasta yang berkonsentrasi pada bisnis tahap akhir yang diantisipasi mendekati peristiwa likuiditas (paling sering IPO). Investor pra-IPO melakukan investasi pada titik-titik selanjutnya dalam sejarah keuangan perusahaan swasta.</p>
                        <ul>
                            <li>Membantu klien dalam proses restrukturisasi-turing perusahaan untuk keperluan listing</li>
                            <li>Menyediakan layanan restrukturisasi bisnis dan aset</li>
                            <li>Memberikan saran dalam perpajakan dan implikasi pendanaan terkait dengan restrukturisasi Pra IPO</li>
                            <li>Membantu klien untuk mengevaluasi prospek bisnis, rencana strategis dan posisi keuangan</li>
                            <li>Membantu klien untuk mengevaluasi daya tarik investasi suatu perusahaan</li>
                            <li>Menilai ekuitas dilihat dari prospek usaha</li>
                            <li>Membiayai seluruh proses di atas</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropIPO} onHide={handleCloseIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    <div>
                        <p>IPO adalah penjualan publik di mana sebuah perusahaan menjual saham kepada investor institusional serta biasanya kepada investor individu ritel</p>
                        <ul>
                            <li>Membantu dalam semua persiapan dan pemenuhan persyaratan listing</li>
                            <li>Membantu perusahaan untuk menemukan struktur dan periode penawaran yang sesuai;</li>
                            <li>Membantu menyiapkan materi pemasaran</li>
                            <li>Memberikan saran tentang harga dan alokasi sekuritas yang ditawarkan</li>
                            <li>Melakukan koordinasi dengan tenaga ahli terkait</li>
                            <li>Menyusun dan meninjau dokumen atau perjanjian terkait IPO</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropPostIPO} onHide={handleClosePostIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Post IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    <div>
                        <p>Pasca-IPO mengacu pada periode setelah penawaran umum perdana saham perusahaan yang menandai masuknya perusahaan ke pasar keuangan ekuitas. Komitmen dan strategi bisnis yang disepakati perusahaan pada tahap awal dilakukan pada tahap pasca transaksi IPO.</p>
                        <ul>
                            <li>Penerbitan hak</li>
                            <li>Transaksi material</li>
                            <li>Transaksi dengan pihak terafiliasi dan/atau mengandung benturan kepentingan</li>
                            <li>Cadangan take-over</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CorporateActionID