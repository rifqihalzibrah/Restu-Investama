import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CompanyPartner = () => {
    const [description, setDescription] = useState("")

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide onClick={() => setDescription("This is description of card PT. BERKAH MULYA ABADI WONOSOBO")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT. BERKAH MULYA ABADI WONOSOBO</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Wonosobo
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card HAFAR GROUP")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>HAFAR GROUP</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Singapore
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT. GLOBAL DINAMIKA INTERNUSA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT. GLOBAL DINAMIKA INTERNUSA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Bandung
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card HARDY CLASSIC")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>HARDY CLASSIC</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Bekasi
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT. SUPRATAMA MAKMUR SEJAHTERA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT. SUPRATAMA MAKMUR SEJAHTERA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT RAGA PERKASA EKAGUNA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT RAGA PERKASA EKAGUNA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT MARIZARASA SARIMURNI")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT MARIZARASA SARIMURNI</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT CHEMPLAST INDONESIA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT CHEMPLAST INDONESIA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card MITRA BERLIAN FARM")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>MITRA BERLIAN FARM</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT ATOURIN TEKNOLOGI NUSANTARA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT ATOURIN TEKNOLOGI NUSANTARA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT HARNIC ONLINE STORE")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT HARNIC ONLINE STORE</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jabodetabek
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT ENERFLOW ENGINEERING INDONESIA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT ENERFLOW ENGINEERING INDONESIA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Cikarang
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT. INDO CATTLE MAKMUR")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT. INDO CATTLE MAKMUR</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Pasuruan
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT SANSEKERTA MEDIKA INDONESIA")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT SANSEKERTA MEDIKA INDONESIA</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card PT NUSAPANGAN SUKSES MAKMUR")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>PT NUSAPANGAN SUKSES MAKMUR</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Tangerang
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
                <SwiperSlide onClick={() => setDescription("This is description of card CARIMOBIL")}>
                    <Card>
                        <img src="" alt="" />
                        <Card.Body>
                            <Card.Title>CARIMOBIL</Card.Title>
                        </Card.Body>
                        <Card.Text>
                            Jakarta
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card>
                </SwiperSlide>
            </Swiper>
            <Card>
                <Card.Header>Description</Card.Header>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card>
        </div>
    )
}

export default CompanyPartner