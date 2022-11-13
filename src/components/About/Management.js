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


const Management = () => {
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
                        <h2 className='font-2'>OUR MANAGEMENT</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <img src={YudiWahyudi} className="DirutKomutPhoto" alt='Yudi Wahyudi'></img>
                    </Col>
                    <Col lg={true} className="value-align-vertical py-5 about-description-container px-5">
                        <Stack gap={3}>
                            <h2 className="font-2">PRESIDENT DIRECTOR</h2>
                            <h2 className="font-2-black">Yudi Wahyudi</h2>
                            <p className="font-4">a Master of Development Administration at the Indonesian State Administration Institute, has experience in capitalization, including improving the capital structure in many projects, managing and raising several companies in government projects, including in terms of precise capital administration and is supervised by a large conglomerate. one of the founders of Restu Investama who continuously make investments, capital and acquisitions in the form of Initial Public Oﬀering (IPO) for several company partners.
                            </p>
                        </Stack>
                    </Col>
                </Row>
                <Row className="Padding my-5">
                    <Col lg={true}>
                        <h2 className="font-2">DIRECTOR</h2>
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
                                    <h4 className="title">Director</h4>
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
                                    <h4 className="title">Director</h4>
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
                                    <h4 className="title">Director</h4>
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
                            <h2 className="font-2">PRESIDENT COMMISSIONER</h2>
                            <h2 className="font-2-black">Moh. Fendi Susiyanto</h2>
                            <p className="font-4">President Commissioner Fendi Susiyanto was a professional in banking and Capital Market & Investment Expert for more than 25 years. His complete expertise are in the area of Banking, Investment and finance; Capital Market & Investment; Asset Management, Investment Banking (Pre-IPO and IPO, corporate restructuring, Private equity, Behavioral finance and technical analysis; Asset Allocation and Portfolio Management, Business Valuation; Wealth management; Financial Planning, Financial and business Modeling, and trading system development.</p>
                        </Stack>
                    </Col>
                    <Col lg={true} className="my-auto order-1 order-lg-2">
                        <div><img src={Fendi} className="DirutKomutPhoto" alt='MOH. FENDI SUSIYANTO'></img></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <h2 className="font-2">COMMISSIONER</h2>
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
                                            <h4 className="title">Commissioner</h4>
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
                                            <h4 className="title">Commissioner</h4>
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
                    Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private clients and companies for investment and business advisory (e.g., IPO, mergers and acquisitions, restructuring) with Restu Investama Indonesia. He is also an independent trader coach and often collaborates with IFTA members to share market outlooks and trading knowledge. As a trader and analyst, he researches how to simplify and implement WD Gann's theory to be more applicable. Rangkuti was a speaker at the 2020 IFTA Annual Conference.
                    Rangkuti is the treasurer of his society, AATI (Asosiasi Analis Teknikal Indonesia). He has been a speaker on the stock market, forex market, commodities market, and technical analysis on several TV programs and at various seminars and workshops related to technical analysis applications for investors and traders. In addition, Rangkuti is also a lecturer at the Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropDarma} onHide={handleCloseDarma} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Darmawangsa Asis</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Darmawangsa asis is an Indonesian citizen who has an educational background in law at the Hasanuddin University Makassar and continues his Masters in Notary Education at the Indonesian Islamic University as a notary profession. He also has a business background joining several companies, especially in the field of corporate legal documents as a legal accounting field, holding management consulting, and joining in the field of investment, capital, and company acquisitions in the form of an Initial Public Oﬀer (IPO) to work together. in several companies owned as directors.
                    DARMAWANGSA ASIS
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropSaifudin} onHide={handleCloseSaifudin} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Saifudin Hisbullah</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Experienced in business as well as youth entrepreneur organizations, leading several companies engaged in telecommunications and digital as well as health, empowering many budding entrepreneurs.
                    SAIFUDIN HISBULLAH
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropRizal} onHide={handleCloseRizal} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Rizal Yasir</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Has a background as a Legal practitioner, Advocate/ Lawyer, in particular handling many cases in the Field of Corruption, Criminal Law, Civil Law and also as a corporate lawyer in various companies. He is also a President Director of an Outsourcing company that has long existed in the Morowali Nickel Mine, and has many clients in Indonesia with a total number of more than 1000 employees
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropAlfatiha} onHide={handleCloseAlfatiha} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Alfatiha Baharnuradi</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Alfatiha is an Indonesian citizen and studied at Stamford College Malaysia. He completed his Business Management Education at Inti College. He has more than 15 years of experience since 2005 in the oil and gas sector where has held BOD and BOC position at a number of oil and gas industry support service companies. In 2017, one of the companies listed on Indonesia Stock Exchange Jakarta.
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    )
}


export default Management