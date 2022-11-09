import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './Service.css'

import aboutImage from "../../assets/bg.png";

const CorporateAction = () => {
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
                <Row className="Padding">
                    <Col className="PhotoService">
                        <div>
                            <img src={aboutImage} alt="About Background" />
                        </div>
                    </Col>
                    <Col>
                        <div className="Padding"><h1 className="ServiceTittle">CORPORATE ACTION ADVISORY</h1></div>
                        <div> <h4>Restu Investama assists and advises the process of corporate action for listed company including rights issuance and other alternative fund raising.</h4>  </div>
                        <div className="PaddingCard">
                            <Card className="PaddingCard CardStyle" onClick={handleShowPreIPO}>
                                <Card.Title className="CardTittle">PRE-IPO FINANCING</Card.Title>
                            </Card>
                        </div>
                        <div className="PaddingCard">
                            <Card className="CardStyle" onClick={handleShowIPO}>
                                <Card.Title className="CardTittle">Initial Public Oﬀering</Card.Title>
                            </Card>
                        </div>
                        <div className="PaddingCard">
                            <Card className="CardStyle" onClick={handleShowPostIPO}>
                                <Card.Title className="CardTittle">Post-IPO</Card.Title>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Offcanvas show={visibleWithBackdropPreIPO} onHide={handleClosePreIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Pre IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private clients and companies for investment and business advisory (e.g., IPO, mergers and acquisitions, restructuring) with Restu Investama Indonesia. He is also an independent trader coach and often collaborates with IFTA members to share market outlooks and trading knowledge. As a trader and analyst, he researches how to simplify and implement WD Gann's theory to be more applicable. Rangkuti was a speaker at the 2020 IFTA Annual Conference.
                    Rangkuti is the treasurer of his society, AATI (Asosiasi Analis Teknikal Indonesia). He has been a speaker on the stock market, forex market, commodities market, and technical analysis on several TV programs and at various seminars and workshops related to technical analysis applications for investors and traders. In addition, Rangkuti is also a lecturer at the Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropIPO} onHide={handleCloseIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private clients and companies for investment and business advisory (e.g., IPO, mergers and acquisitions, restructuring) with Restu Investama Indonesia. He is also an independent trader coach and often collaborates with IFTA members to share market outlooks and trading knowledge. As a trader and analyst, he researches how to simplify and implement WD Gann's theory to be more applicable. Rangkuti was a speaker at the 2020 IFTA Annual Conference.
                    Rangkuti is the treasurer of his society, AATI (Asosiasi Analis Teknikal Indonesia). He has been a speaker on the stock market, forex market, commodities market, and technical analysis on several TV programs and at various seminars and workshops related to technical analysis applications for investors and traders. In addition, Rangkuti is also a lecturer at the Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={visibleWithBackdropPostIPO} onHide={handleClosePostIPO} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="NameTittle">Post IPO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Description">
                    Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private clients and companies for investment and business advisory (e.g., IPO, mergers and acquisitions, restructuring) with Restu Investama Indonesia. He is also an independent trader coach and often collaborates with IFTA members to share market outlooks and trading knowledge. As a trader and analyst, he researches how to simplify and implement WD Gann's theory to be more applicable. Rangkuti was a speaker at the 2020 IFTA Annual Conference.
                    Rangkuti is the treasurer of his society, AATI (Asosiasi Analis Teknikal Indonesia). He has been a speaker on the stock market, forex market, commodities market, and technical analysis on several TV programs and at various seminars and workshops related to technical analysis applications for investors and traders. In addition, Rangkuti is also a lecturer at the Jakarta Business School.
                    INDRAWIJAYA
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CorporateAction