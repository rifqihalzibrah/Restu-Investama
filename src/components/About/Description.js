import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Description = () => {
    return (
        <div>
            <Container className="about-description-container py-3 px-5">
                <Row>
                    <Col lg={true}>
                        <h1 className="font-1 pb-5">ABOUT OUR COMPANY</h1>
                        <h2 className="font-2-black pb-3">PT. RESTU INTI NUSA ABADI</h2>

                        <div className="font-4 pb-3">
                            PT. Restu Inti Nusa Abadi is an investment firm that provides various services by assisting the client to implement the corporate action on setting up the goals and structures strategically through public offering, merger & acquisition and restructuring.
                        </div>
                        <div className="font-4 pb-3">
                            PT. Restu Inti Nusa Abadi (Restu Investama) strives to actively contribute to Indonesia's capital market providing various integrated financial solutions for corporate actions on the financial and investment sector.
                        </div>
                        <div className="font-4 pb-3">
                            Restu Investama is equipped with various experiences and expertise in the field of advisory including stock valuation, laws and regulations regarding limited liability companies, capital markets and taxation.
                        </div>
                        <div className="font-4 pb-3">
                            Established in 2021 with a permit from the Ministry of Law and Human Rights AHU- 0079557.AH.01.01.In 2021, Restu Investama is one of the leaders of the many investment manager companies in Indonesia. Since then, Restu Investama has continued to run its business through the ups and downs of the mutual fund industry in Indonesia to date.
                        </div>
                        <div className="font-4 pb-3">
                            Currently, Restu Investama has been manages some portfolio of various mutual fund products and bilateral fund management contracts. We provide these services to individual customers through various banking sales agent partners in Indonesia, both national and foreign banks. Meanwhile, our institutional customers include pension funds, foundations, insurance companies and corporations.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Description;