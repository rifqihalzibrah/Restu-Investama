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
                            <p className='font-4'>Pre-IPO, or pre-initial public offering, is a branch of private equity investing that concentrates on...</p>
                            <span className="link-text">
                                View More
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowIPO}>
                            <h3>IPO</h3>
                            <p className='font-4'>IPO is a public sale in which a firm sells shares to institutional investors as well as typically to retail individual investors....</p>
                            <span className="link-text">
                                View More
                            </span>
                        </div>
                    </Col>
                    <Col lg={true}>
                        <div className="data-card mx-auto" onClick={handleShowPostIPO}>
                            <h3>POST-IPO</h3>
                            <p className='font-4'>Post-IPO refers to the period after a company's initial public offering of stock which marks its entry into the equity financial markets...</p>
                            <span className="link-text">
                                View More
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
                    <div>
                        <p>Pre-IPO, or pre-initial public offering, is a branch of private equity investing that concentrates on late-stage businesses that are anticipated to be close to a liquidity event (most commonly an IPO). Pre-IPO investors make investments at later points in a private company's history of finance.</p>
                        <ul>
                            <li>Assist client in regard to the process of corporate restructuring-turing for listing purposes</li>
                            <li>Providing business and assets restructuring services</li>
                            <li>Providing advices in taxation and funding implications related to Pre IPO restructuring</li>
                            <li>Assisting clients to evaluate business prospects, strategic plans and financial position</li>
                            <li>Assisting clients to evaluate investment attractiveness of a company</li>
                            <li>Valuating equity in view of business prospects </li>
                            <li>Financing the whole process above</li>
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
                        <p>IPO is a public sale in which a firm sells shares to institutional investors as well as typically to retail individual investors</p>
                        <ul>
                            <li>Assisting in all preparation and fulfillment of listing requirements</li>
                            <li>Assisting the company in order to find suitable oﬀering structure and period;</li>
                            <li>Assisting in the preparation of marketing materials</li>
                            <li>Providing advices on pricing and allocation of the securities oﬀered</li>
                            <li>Coordinating with related professional experts</li>
                            <li>Drafting and reviewing of IPO related documents or agreements </li>
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
                        <p>Post-IPO refers to the period after a company's initial public offering of stock which marks its entry into the equity financial markets. The commitments and business strategies the company agreed to in the earlier stages are carried out during the post-IPO transaction stage.</p>
                        <ul>
                            <li>Rights issuance;</li>
                            <li>Material transactions</li>
                            <li>Transactions with aﬃliated parties and/or with conflict of interest</li>
                            <li>Reserve take-overs.</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CorporateAction