import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bmaw from "../../assets/logo-bmaw.png"
import hafar from "../../assets/hafar.png"
import kasbon from "../../assets/kasbon.png"
import hardy from "../../assets/hardy-classic.png"
import supratama from "../../assets/supratama.png"
import ragaPerkasa from "../../assets/raga_perkasa_ekaguna.png"
import mariza from "../../assets/mariza_foods.png"
import chemplast from "../../assets/chemplast_indo.png"
import mitraBerlian from "../../assets/mitra_berlian.png"
import atourin from "../../assets/atourin.jpg"
import harnic from "../../assets/harnic.png"
import enerflow from "../../assets/enerflow.jpg"
import cattle from "../../assets/indo_cattle_makmur.png"
import sansekerta from "../../assets/sansekerta.jpg"
import nusapangan from "../../assets/nusapangan.png"
import cariMobil from "../../assets/cari_mobil.png"

const CompanyPartnerID = () => {
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
                <Row className="pb-3"><h2 className='font-2'>PERUSAHAAN YANG TELAH BERTEMU DAN MENJALIN KERJA SAMA DENGAN KAMI</h2></Row>
                <Row>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={screenSize.dynamicWidth >= 992 ? 3 : screenSize.dynamicWidth >= 768 ? 2 : 1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide onClick={() => setDescription("This is description of card PT. BERKAH MULYA ABADI WONOSOBO")}>
                            <div className="container-partner">
                                <div className="card-partner">
                                    <div className="face face1">
                                        <div className="content">
                                            <img src={bmaw} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT. BERKAH MULYA ABADI WONOSOBO</h4>
                                            <p>Wonosobo</p>
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
                                            <img src={hafar} />
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>HAFAR GROUP</h4>
                                            <p>Singapore</p>
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
                                            <img src={kasbon} />
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT. GLOBAL DINAMIKA INTERNUSA</h4>
                                            <p>Bandung</p>
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
                                            <img src={hardy} />
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>HARDY CLASSIC</h4>
                                            <p>Bekasi</p>
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
                                            <img src={supratama} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT. SUPRATAMA MAKMUR SEJAHTERA</h4>
                                            <p>Jakarta</p>
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
                                            <img src={ragaPerkasa} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT RAGA PERKASA EKAGUNA</h4>
                                            <p>Jakarta</p>
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
                                            <img src={mariza} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT MARIZARASA SARIMURNI</h4>
                                            <p>Jakarta</p>
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
                                            <img src={chemplast} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT CHEMPLAST INDONESIA</h4>
                                            <p>Jakarta</p>
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
                                            <img src={mitraBerlian} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>MITRA BERLIAN FARM</h4>
                                            <p>Jakarta</p>
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
                                            <img src={atourin} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h3>PT ATOURIN TEKNOLOGI NUSANTARA</h3>
                                            <p>Jakarta</p>
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
                                            <img src={harnic} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT HARNIC ONLINE STORE</h4>
                                            <p>JABODETABEK</p>
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
                                            <img src={enerflow} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT ENERFLOW ENGINEERING INDONESIA</h4>
                                            <p>Cikarang</p>
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
                                            <img src={cattle} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT. INDO CATTLE MAKMUR</h4>
                                            <p>Pasuruan</p>
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
                                            <img src={sansekerta} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT SANSEKERTA MEDIKA INDONESIA</h4>
                                            <p>Jakarta</p>
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
                                            <img src={nusapangan} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>PT NUSAPANGAN SUKSES MAKMUR</h4>
                                            <p>Tangerang</p>
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
                                            <img src={cariMobil} />

                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <div className="content">
                                            <h4>CARIMOBIL</h4>
                                            <p>Jakarta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
                {/* <Row className='company-partner-description'>
                    <Card>
                        <Card.Text>Description</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card>
                </Row> */}
            </Container>
        </div>
    )
}

export default CompanyPartnerID