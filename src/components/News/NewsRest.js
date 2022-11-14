import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from "../../assets/bg.png";
import "./News.css";

const NewsRest = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    return (
        <div>
            <Container>
                <Row className="Padding">
                    <Col>
                        <h2 className="font-2">Previous News</h2>
                    </Col>
                </Row>
                <Row className='margin-auto'>
                    <Col lg={true} className="my-3">
                        <Row className="margin-auto">
                            <Col className='me-3'>
                                <div className="card-prevnews">
                                    <div className="card__img-container">
                                        <img className="card__img" src={aboutImage} alt="unsplash random image" />

                                    </div>
                                    <div className="card__body">
                                        <h5 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo tenetur, sunt dicta laboriosam error earum praesentium expedita doloremque magnam.</h5>
                                        <p className="card__date">Updated on
                                            <time>&nbsp;Oct 24, 2022</time>
                                        </p>
                                        <p className="card__cta">Read more</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-prevnews">
                                    <div className="card__img-container">
                                        <img className="card__img" src={aboutImage} alt="unsplash random image" />

                                    </div>
                                    <div className="card__body">
                                        <h5 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo tenetur, sunt dicta laboriosam error earum praesentium expedita doloremque magnam.</h5>
                                        <p className="card__date">Updated on
                                            <time>&nbsp;Oct 24, 2022</time>
                                        </p>
                                        <p className="card__cta">Read more</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={true}>
                        <Row className="margin-auto">
                            <Col className='me-3'>
                                <div className="card-prevnews">
                                    <div className="card__img-container">
                                        <img className="card__img" src={aboutImage} alt="unsplash random image" />

                                    </div>
                                    <div className="card__body">
                                        <h5 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo tenetur, sunt dicta laboriosam error earum praesentium expedita doloremque magnam.</h5>
                                        <p className="card__date">Updated on
                                            <time>&nbsp;Oct 24, 2022</time>
                                        </p>
                                        <p className="card__cta">Read more</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card-prevnews">
                                    <div className="card__img-container">
                                        <img className="card__img" src={aboutImage} alt="unsplash random image" />

                                    </div>
                                    <div className="card__body">
                                        <h5 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo tenetur, sunt dicta laboriosam error earum praesentium expedita doloremque magnam.</h5>
                                        <p className="card__date">Updated on
                                            <time>&nbsp;Oct 24, 2022</time>
                                        </p>
                                        <p className="card__cta">Read more</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewsRest