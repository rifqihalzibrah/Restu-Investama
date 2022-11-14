import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';
import YudiWahyudi from '../../assets/Direktur_Utama.png';
import IndraWijaya from '../../assets/Direktur_1.png';
import Darmawangsa from '../../assets/Direktur_2.png';
import Saifudin from '../../assets/Direktur_3.png';
import Fendi from '../../assets/Komisioner_Utama.png';
import Rizal from '../../assets/Komisioner_1.png';
import Alfatiha from '../../assets/Komisioner_2.png';


const ManagementID = () => {
    const [visibleWithBackdropIndra, setVisibleWithBackdropIndra] = useState(false)
    const [visibleWithBackdropDarma, setVisibleWithBackdropDarma] = useState(false)
    const [visibleWithBackdropSaifudin, setVisibleWithBackdropSaifudin] = useState(false)
    const [visibleWithBackdropRizal, setVisibleWithBackdropRizal] = useState(false)
    const [visibleWithBackdropAlfatiha, setVisibleWithBackdropAlfatiha] = useState(false)

    const handleCloseIndra = () => setVisibleWithBackdropIndra(false);
    const handleShowIndra = () => setVisibleWithBackdropIndra(true);
    const handleCloseDarma = () => setVisibleWithBackdropDarma(false);
    const handleShowDarma = () => setVisibleWithBackdropDarma(true);
    const handleCloseSaifudin = () => setVisibleWithBackdropSaifudin(false);
    const handleShowSaifudin = () => setVisibleWithBackdropSaifudin(true);
    const handleCloseRizal = () => setVisibleWithBackdropRizal(false);
    const handleShowRizal = () => setVisibleWithBackdropRizal(true);
    const handleCloseAlfatiha = () => setVisibleWithBackdropAlfatiha(false);
    const handleShowAlfatiha = () => setVisibleWithBackdropAlfatiha(true);

    return (
        <div>
            <Container>
                <Row className="Padding">
                    <Col lg={true}>
                        <h2 className='font-2'>MANAJEMEN KAMI</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <img src={YudiWahyudi} className="DirutKomutPhoto" alt='Yudi Wahyudi'></img>
                    </Col>
                    <Col lg={true} className="value-align-vertical py-5 about-description-container px-5">
                        <Stack gap={3}>
                            <h2 className="font-2">DIREKTUR UTAMA</h2>
                            <h2 className="font-2-black">Yudi Wahyudi</h2>
                            <p className="font-4">Magister Administrasi Pembangunan di Lembaga Administrasi Negara Indonesia, memiliki pengalaman dalam permodalan, termasuk memperbaiki struktur permodalan di banyak proyek, mengelola dan membesarkan beberapa perusahaan dalam proyek-proyek pemerintah, termasuk dalam hal administrasi permodalan yang tepat dan disupervisi oleh konglomerat besar. salah satu pendiri Restu Investama yang secara kontinyu melakukan investasi, permodalan dan akuisisi dalam bentuk Initial Public Oﬀering (IPO) untuk beberapa mitra perusahaan.
                            </p>
                        </Stack>
                    </Col>
                </Row>
                <Row className="Padding my-5">
                    <Col lg={true}>
                        <h2 className="font-2">DIREKTUR</h2>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col lg={true} className="pt-3">
                        <div className='team-container-center' onClick={handleShowIndra}>
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={IndraWijaya} />
                                </div>
                                <div className="team-content">
                                    <h5 className="name">Indrawijaya</h5>
                                    <h4 className="title">Direktur</h4>
                                </div>
                                <div className="social">
                                    <div className='bottom'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={true} className="pt-3">
                        <div className='team-container-center' onClick={handleShowDarma}>
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={Darmawangsa} />
                                </div>
                                <div className="team-content">
                                    <h5 className="name">Darmawangsa Asis</h5>
                                    <h4 className="title">Direktur</h4>
                                </div>
                                <div className="social">
                                    <div className='bottom'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={true} className="pt-3">
                        <div className='team-container-center' onClick={handleShowSaifudin}>
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={Saifudin} />
                                </div>
                                <div className="team-content">
                                    <h5 className="name">Saifudin Hisbullah</h5>
                                    <h4 className="title">Direktur</h4>
                                </div>
                                <div className="social">
                                    <div className='bottom'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="Padding my-5">
                    <Col lg={true} className="my-auto pt-5 about-description-container px-5 order-2 order-lg-1">
                        <Stack gap={3}>
                            <h2 className="font-2">KOMISARIS UTAMA</h2>
                            <h2 className="font-2-black">Moh. Fendi Susiyanto</h2>
                            <p className="font-4">Komisaris Utama Fendi Susiyanto adalah seorang profesional di bidang perbankan dan Ahli Pasar Modal & Investasi selama lebih dari 25 tahun. Keahliannya yang lengkap adalah di bidang Perbankan, Investasi dan keuangan; Pasar Modal & Investasi; Manajemen Aset, Investment Banking (Pra-IPO dan IPO, restrukturisasi perusahaan, Private equity, Behavioral finance dan analisis teknikal; Alokasi Aset dan Manajemen Portofolio, Valuasi Bisnis; Manajemen kekayaan; Perencanaan Keuangan, Pemodelan Keuangan dan bisnis, dan pengembangan sistem perdagangan.</p>
                        </Stack>
                    </Col>
                    <Col lg={true} className="my-auto order-1 order-lg-2">
                        <div><img src={Fendi} className="DirutKomutPhoto" alt='MOH. FENDI SUSIYANTO'></img></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <h2 className="font-2">KOMISARIS</h2>
                    </Col>
                </Row>
                <Row className="Padding justify-content-md-center" >
                    <Col lg={8}>
                        <Row className="CardGroupMargin">
                            <Col lg={true} className="pt-5">
                                <div className='team-container-center' onClick={handleShowRizal}>
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src={Rizal} />
                                        </div>
                                        <div className="team-content">
                                            <h5 className="name">Rizal Yassir</h5>
                                            <h4 className="title">Komisaris</h4>
                                        </div>
                                        <div className="social">
                                            <div className='bottom'></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={true} className="pt-5">
                                <div className='team-container-center' onClick={handleShowAlfatiha}>
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src={Alfatiha} />
                                        </div>
                                        <div className="team-content">
                                            <h5 className="name">Alfatiha Bahar Nuradi</h5>
                                            <h4 className="title">Komisaris</h4>
                                        </div>
                                        <div className="social">
                                            <div className='bottom'></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Offcanvas show={visibleWithBackdropIndra} onHide={handleCloseIndra} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Indra Wijaya</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Indrawijaya Rangkuti, MBA, CTA, adalah manajer aset untuk klien pribadi dan perusahaan untuk investasi dan penasihat bisnis (misalnya, IPO, merger dan akuisisi, restrukturisasi) dengan Restu Investama Indonesia. Beliau juga merupakan pelatih trader independen dan sering berkolaborasi dengan anggota IFTA untuk berbagi pandangan pasar dan pengetahuan trading. Sebagai seorang trader dan analis, ia meneliti bagaimana menyederhanakan dan menerapkan teori WD Gann agar lebih aplikatif. Rangkuti adalah pembicara pada Konferensi Tahunan IFTA 2020.
                    Rangkuti adalah bendahara dari perkumpulannya, AATI (Asosiasi Analis Teknikal Indonesia). Dia telah menjadi pembicara tentang pasar saham, pasar valas, pasar komoditas, dan analisis teknikal di beberapa program TV dan di berbagai seminar dan lokakarya yang berkaitan dengan aplikasi analisis teknikal untuk investor dan pedagang. Selain itu, Rangkuti juga menjadi dosen di Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropDarma} onHide={handleCloseDarma} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Darmawangsa Asis</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Darmawangsa asis merupakan warga negara Indonesia yang memiliki latar belakang pendidikan di bidang hukum di Universitas Hasanuddin Makassar dan melanjutkan pendidikan Magister Kenotariatan di Universitas Islam Indonesia sebagai profesi notaris. Beliau juga memiliki latar belakang bisnis yang bergabung di beberapa perusahaan khususnya di bidang dokumen legal perusahaan sebagai bidang legal accounting, memegang konsultan manajemen, dan bergabung di bidang investasi, permodalan, dan akuisisi perusahaan dalam bentuk Initial Public Oﬀer (IPO) hingga bekerja sama di beberapa perusahaan yang dimiliki sebagai direksi.
                    DARMAWANGSA ASIS
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropSaifudin} onHide={handleCloseSaifudin} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Saifudin Hisbullah</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Berpengalaman dalam bisnis serta organisasi pengusaha muda, memimpin beberapa perusahaan yang bergerak di bidang telekomunikasi dan digital serta kesehatan, memberdayakan banyak pengusaha pemula.
                    SAIFUDIN HISBULLAH
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropRizal} onHide={handleCloseRizal} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Rizal Yasir</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Memiliki latar belakang sebagai praktisi Hukum, Advokat/Pengacara, khususnya banyak menangani kasus-kasus di Bidang Korupsi, Hukum Pidana, Hukum Perdata dan juga sebagai corporate lawyer di berbagai perusahaan. Beliau juga merupakan Direktur Utama perusahaan Outsourcing yang telah lama eksis di Tambang Nikel Morowali, dan memiliki banyak klien di Indonesia dengan jumlah karyawan lebih dari 1000 orang.
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropAlfatiha} onHide={handleCloseAlfatiha} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Alfatiha Baharnuradi</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Alfatiha adalah warga negara Indonesia dan belajar di Stamford College Malaysia. Beliau menyelesaikan pendidikan Manajemen Bisnis di Inti College. Beliau memiliki pengalaman lebih dari 15 tahun sejak tahun 2005 di sektor minyak dan gas bumi di mana beliau pernah menduduki posisi Direksi dan Dewan Komisaris di sejumlah perusahaan jasa pendukung industri minyak dan gas bumi. Pada tahun 2017, salah satu perusahaannya tercatat di Bursa Efek Indonesia Jakarta.
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    )
}


export default ManagementID