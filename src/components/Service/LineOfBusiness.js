import React from 'react';
import Col from "react-bootstrap/Col";
import { Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import './Service.css'

const LineOfBusiness = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true}>
                        <h1 className='font-1'>OUR LINE OF BUSSINESS</h1>
                    </Col>
                </Row>
                <Row className='service-padding-1'>
                    <Col lg={true}>
                        <span className="font-4-bold">
                            Restu Investama offers prominent and distinguished financial advisory services and innovative financial solutions including Pre-IPO financing, restructuring, IPO, Share Financing and corporate action advisory.
                        </span>
                    </Col>
                </Row>
                <Row className='service-padding-card'>
                    <div className="cards-lob">
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title">PRE-IPO FINANCING</h3>
                            </div>
                            <div className="mt-5"> Restu Investama covers the financial expenses for the IPO process of the client including the expenses for the professional support fee from the preliminary step until to the date of listing.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title">INITIAL PUBLIC OFFERING</h3>
                            </div>
                            <div className="mt-5"> Restu Investama assists and advises the process of offering new shares or old shares of a private company to transform the company to be a public listed company. Through IPO process allows the company to raise funds from public.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title">RESTRUCTURING</h3>
                            </div>
                            <div className="mt-5"> The restructuring process consist of identification and determination of the area required to be restructured followed by creating short-term and long-term plans to correct weaknesses.</div>
                        </div>
                        <div className="card-lob card-lob-1">
                            <div>
                                <h3 className="card__title">SHARE FINANCE</h3>
                            </div>
                            <div className="mt-5"> On this line of business, Restu Investama fully assists the client to obtain a share financing from foreign investment firm. The process started from the initial stage until the client secure the fund.</div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LineOfBusiness