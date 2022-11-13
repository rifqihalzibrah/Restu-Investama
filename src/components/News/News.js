import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const News = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='bg-warning'>1</div>
                    </Col>
                    <Col>
                        <div className='bg-warning'>2</div>
                        <div className='bg-warning'>3</div>
                        <div className='bg-warning'>4</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default News