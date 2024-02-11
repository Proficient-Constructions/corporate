import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="mt-auto bg-info py-3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <span>Column 1</span>
                        </Col>
                        <Col className="text-center">
                            <span> Column 2</span>
                        </Col>
                        <Col className="text-center">
                            <span> Column 3</span>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col className="text-center">
                            <span> Proficient Constructions {new Date().getFullYear()}</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;