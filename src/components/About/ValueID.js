import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ValueID = () => {
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col lg={true} className=" value-align-vertical pb-5"><h2 className='font-2'>NILAI-NILAI KAMI</h2></Col>
                    <Col lg={true}>
                        <h2 className="font-2">Unggul</h2>
                        <p className="font-4">
                            Restu Investama memberikan layanan yang sangat baik melebihi ekspektasi klien yang didukung oleh tim dan infrastruktur yang sangat baik.
                        </p>
                        <h2 className="font-2">Inovatif</h2>
                        <p className="font-4">
                            Selain praktik terbaik yang berkualitas dan efektif, Restu Investama menyediakan sarana inovatif untuk mengupayakan objektif klien.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ValueID