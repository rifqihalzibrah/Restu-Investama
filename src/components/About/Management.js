import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import YudiWahyudi from '../../assets/Direktur Utama.jpg';
import IndraWijaya from '../../assets/Direktur 1.jpg';
import Darmawangsa from '../../assets/Direktur 2.jpg';
import Saifudin from '../../assets/Direktur 3.jpeg';
import Fendi from '../../assets/Komisioner Utama.jpg';
import Rizal from '../../assets/Komisioner 1.jpeg';
import Alfatiha from '../../assets/Komisioner 2.jpg';


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
                    <Col lg={true} className="ManagementText">OUR MANAGEMENT</Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <img src={YudiWahyudi} className="DirutKomutPhoto" alt='Yudi Wahyudi'></img>
                    </Col>
                    <Col lg={true}>
                        <Stack gap={3}>
                            <div className="JobTittle">DIREKTUR UTAMA</div>
                            <div className="NameTittle">Yudi Wahyudi</div>
                            <div className="Description">a Master of Development Administration at the Indonesian State Administration Institute, has experience in capitalization, including improving the capital structure in many projects, managing and raising several companies in government projects, including in terms of precise capital administration and is supervised by a large conglomerate.
                                one of the founders of Restu Investama who continuously make investments, capital and acquisitions in the form of Initial Public Oﬀering (IPO) for several company partners.
                            </div>
                        </Stack>
                    </Col>
                </Row>
                <Row className="Padding">
                    <Col lg={true} className="JobTittle">DIRECTOR</Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <Row className=
                            "CardGroupMargin">
                            <Col lg={true}>
                                <Card border="info" className="CardGroup" onClick={handleShowIndra}>
                                    <Card.Img variant="top" src={IndraWijaya} className="CardPhoto" />
                                    <Card.Body>
                                        <Card.Title>Indra Wijaya</Card.Title>
                                        <Card.Text>
                                            Direktur
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card border="info" className="CardGroup" onClick={handleShowDarma}>
                                    <Card.Img variant="top" src={Darmawangsa} className="CardPhoto" />
                                    <Card.Body>
                                        <Card.Title>Darmawangsa Asis</Card.Title>
                                        <Card.Text>
                                            Direktur
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card border="info" className="CardGroup" onClick={handleShowSaifudin}>
                                    <Card.Img variant="top" src={Saifudin} className="CardPhoto" />
                                    <Card.Body>
                                        <Card.Title>Saifudin Hisbullah</Card.Title>
                                        <Card.Text>
                                            Direktur
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="Padding">
                    <Col lg={true}>
                        <Stack gap={3}>
                            <div><img src={Fendi} className="DirutKomutPhoto" alt='MOH. FENDI SUSIYANTO'></img></div>
                            <div className="JobTittleKomis">Komisioner Utama</div>
                            <div className="NameTittleKomis">MOH. FENDI SUSIYANTO</div>
                        </Stack>
                    </Col>
                    <Col lg={true}>
                        <div className="Description">Komisaris utama Fendi Susiyanto was a professional in banking and Capital Market & Investment Expert for more than 25 years. His complete expertise are in the area of Banking, Investment and finance; Capital Market & Investment; Asset Management, Investment Banking
                            (Pre-IPO and IPO, corporate restructuring, Private equity, Behavioral finance and technical analysis; Asset Allocation and Portfolio Management, Business Valuation; Wealth management; Financial Planning, Financial and business Modeling, and trading system development.</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <div className="JobTittleKomis">Commissioner</div>
                    </Col>
                </Row>
                <Row className="Padding justify-content-md-center" >
                    <Col lg={8}>
                        <Row className="CardGroupMargin">
                            <Col lg={true}>
                                <Card border="info" className="CardGroup" onClick={handleShowRizal}>
                                    <Card.Img variant="top" src={Rizal} className="CardPhoto" />
                                    <Card.Body>
                                        <Card.Title>Rizal Yassir</Card.Title>
                                        <Card.Text>
                                            Komisaris
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card border="info" className="CardGroup" onClick={handleShowAlfatiha}>
                                    <Card.Img variant="top" src={Alfatiha} className="CardPhoto" />
                                    <Card.Body>
                                        <Card.Title>Alfatiha Baharnuradi</Card.Title>
                                        <Card.Text>
                                            Komisaris
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Offcanvas show={visibleWithBackdropIndra} onHide={handleCloseIndra}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Indra Wijaya</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private clients and companies for investment and business advisory (e.g., IPO, mergers and acquisitions, restructuring) with Restu Investama Indonesia. He is also an independent trader coach and often collaborates with IFTA members to share market outlooks and trading knowledge. As a trader and analyst, he researches how to simplify and implement WD Gann's theory to be more applicable. Rangkuti was a speaker at the 2020 IFTA Annual Conference.
                    Rangkuti is the treasurer of his society, AATI (Asosiasi Analis Teknikal Indonesia). He has been a speaker on the stock market, forex market, commodities market, and technical analysis on several TV programs and at various seminars and workshops related to technical analysis applications for investors and traders. In addition, Rangkuti is also a lecturer at the Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropDarma} onHide={handleCloseDarma}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Darmawangsa Asis</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Darmawangsa asis is an Indonesian citizen who has an educational background in law at the Hasanuddin University Makassar and continues his Masters in Notary Education at the Indonesian Islamic University as a notary profession. He also has a business background joining several companies, especially in the field of corporate legal documents as a legal accounting field, holding management consulting, and joining in the field of investment, capital, and company acquisitions in the form of an Initial Public Oﬀer (IPO) to work together. in several companies owned as directors.
                    DARMAWANGSA ASIS
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropSaifudin} onHide={handleCloseSaifudin}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Saifudin Hisbullah</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Experienced in business as well as youth entrepreneur organizations, leading several companies engaged in telecommunications and digital as well as health, empowering many budding entrepreneurs.
                    SAIFUDIN HISBULLAH
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropRizal} onHide={handleCloseRizal}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Rizal Yasir</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Has a background as a Legal practitioner, Advocate/ Lawyer, in particular handling many cases in the Field of Corruption, Criminal Law, Civil Law and also as a corporate lawyer in various companies. He is also a President Director of an Outsourcing company that has long existed in the Morowali Nickel Mine, and has many clients in Indonesia with a total number of more than 1000 employees
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropAlfatiha} onHide={handleCloseAlfatiha}>
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