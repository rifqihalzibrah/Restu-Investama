import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bmaw from "../../assets/logo-bmaw.png"

const CompanyPartner = () => {
    const [description, setDescription] = useState("")

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    return (
        <div>
            <Container>
                <Row className="pb-3"><h2 className='font-2'>COMPANIES THAT HAVE MET AND ASSESSED WITH US</h2></Row>
                <Row className='pt-5'>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={screenSize.dynamicWidth >= 768 ? 3 : 1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide onClick={() => setDescription("This is description of card PT. BERKAH MULYA ABADI WONOSOBO")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card HAFAR GROUP")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT. GLOBAL DINAMIKA INTERNUSA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card HARDY CLASSIC")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT. SUPRATAMA MAKMUR SEJAHTERA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT RAGA PERKASA EKAGUNA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT MARIZARASA SARIMURNI")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT CHEMPLAST INDONESIA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card MITRA BERLIAN FARM")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT ATOURIN TEKNOLOGI NUSANTARA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT HARNIC ONLINE STORE")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT ENERFLOW ENGINEERING INDONESIA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT. INDO CATTLE MAKMUR")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT SANSEKERTA MEDIKA INDONESIA")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card PT NUSAPANGAN SUKSES MAKMUR")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onClick={() => setDescription("This is description of card CARIMOBIL")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />
                                            <h3>Design</h3>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
                <Row className='company-partner-description'>
                    <Card>
                        <Card.Text>Description</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default CompanyPartner