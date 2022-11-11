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
                <Row>
                    <Col lg={true}>
                        <h2 className="font-2">CORPORATE ACTION ADVISORY</h2>
                    </Col>
                </Row>
                <Row className='service-padding-1'>
                    <Col lg={true}>
                        <div>
                            <p className='font-4-bold'>Restu Investama assists and advises the process of corporate action for listed company including rights issuance and other alternative fund raising.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mx-auto'>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowPreIPO}>
                            <h3>PRE-IPO</h3>
                            <p>Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private...</p>
                            <span className="link-text">
                                View More
                                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#007EC4" />
                                </svg>
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowIPO}>
                            <h3>IPO</h3>
                            <p>Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private...</p>
                            <span className="link-text">
                                View More
                                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#007EC4" />
                                </svg>
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowPostIPO}>
                            <h3>POST-IPO</h3>
                            <p>Indrawijaya Rangkuti, MBA, CTA, is an asset manager for private...</p>
                            <span className="link-text">
                                View More
                                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#007EC4" />
                                </svg>
                            </span>
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