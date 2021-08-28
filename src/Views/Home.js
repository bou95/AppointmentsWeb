import React from 'react';
import {MobileView, BrowserView} from "react-device-detect";
import { Button, Card, Col, Container, Row, Form, Tabs, Tab, ListGroup, Nav } from 'react-bootstrap';

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
                    <div className="site-section bg-image-home overlay" style={{ position: 'relative' }}>
                        <BrowserView>
                            <br/><br/><br/><br/>
                            <Container fluid className="h-100">
                                <Row className="justify-content-center align-items-center no-gutters h-100">
                                    <Col xs="12" sm="12" md="10" lg="6">
                                        <Card style={{ fontSize: 'small' }} className={'homeCard'}>
                                            <Card.Body>
                                                <Row style={{ textAlign: 'center', margin: '50px', fontFamily: 'Poppins' }}>
                                                    <Col>
													<span style={{ fontSize: '27px', color: '#4A4A4A' }}>
													Heading
													</span>
                                                        <br />
                                                        <br/>
                                                        <span style={{ fontSize: '18px', color: '#6C6C6C' }}>
														SubHeading
													</span>
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginBottom: '40px' }}>
                                                    <Col md={4}>
                                                        Hi 1
                                                    </Col>
                                                    <Col md={4}>
                                                       Hi 2
                                                    </Col>
                                                    <Col md={4}>
                                                        Hi 3
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </BrowserView>
                        <MobileView>
                        {/* TODO: Here goes the design for accessing the website from a mobile phone*/}
                        </MobileView>
                    </div>
        );
    }
}

export default Home;
