import React from 'react';
import Col from "react-bootstrap/Col";
import { Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import './Service.css'

const LineOfBusiness = () => {
    return (
        <div>
            <Container>
                <Row className="Padding">
                    <Col lg={true} className="ServiceTittle">OUR LINE OF BUSSINESS</Col>
                </Row>
                <Row className="Padding">
                    <Col lg={true}>
                        <p className="ServiceDescription">
                            <h3>Restu Investama offers prominent and distinguished financial advisory services and innovative financial solutions including Pre-IPO financing, restructuring, IPO, Share Financing and corporate action advisory.</h3>
                        </p>
                    </Col>
                </Row>
                <Row className="PaddingCard">
                    <Col lg={true}>
                        <Card>
                            <Card.Title className="CardTittle">PRE-IPO FINANCING</Card.Title>
                            <Card.Text className="PaddingCard">
                                <div className="CardText">
                                    Restu Investama covers the financial expenses for the IPO process of the client including the expenses for the professional support fee from the preliminary step until to the date of listing.
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col lg={true}>
                        <Card>
                            <Card.Title className="CardTittle">INITIAL PUBLIC OFFERING</Card.Title>
                            <Card.Text className="PaddingCard">
                                <div className="CardText">
                                    Restu Investama assists and advises the process of offering new shares or old shares of a private company to transform the company to be a public listed company. Through IPO process allows the company to raise funds from public.
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="PaddingCard">
                    <Col lg={true}>
                        <Card>
                            <Card.Title className="CardTittle">RESTRUCTURING</Card.Title>
                            <Card.Text className="PaddingCard">
                                <div className="CardText">
                                    The restructuring process consist of identification and determination of the area required to be restructured followed by creating short-term and long-term plans to correct weaknesses. The next step will be carrying out the new
                                    structure on the calculation to secure funding.
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col lg={true}>
                        <Card>
                            <Card.Title className="CardTittle">SHARE FINANCE</Card.Title>
                            <Card.Text className="PaddingCard">
                                <div className="CardText">
                                    On this line of business, Restu Investama fully assists the client to obtain a share financing from foreign investment firm.
                                    The process started from the initial stage until the client secure the fund.
                                </div>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LineOfBusiness