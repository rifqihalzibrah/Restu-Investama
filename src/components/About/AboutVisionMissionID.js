import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import aboutImage from "../../assets/bg.png";

const AboutVisionMissionID = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={true} className="about-vision-mission-align-vertical">
                        <Row>
                            <Col lg={true}>
                                <h2 className="font-2-left">VISI</h2> <hr />
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={true}>
                                <p className="font-4">Perusahaan investasi aktif kelas dunia di Indonesia yang mengedepankan karakter bisnis yang kuat untuk menciptakan nilai bagi para pemangku kepentingan dan bangsa Indonesia.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true} className="mt-5">
                                <h2 className="font-2-left">MISI</h2> <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                                <p className="font-4">Menjadi mitra pilihan bagi investor yang tertarik untuk berpartisipasi dalam dinamika pertumbuhan Indonesia.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={true}>
                        <img className="responsive-image" src={aboutImage} alt="About Background" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutVisionMissionID;