import React from 'react';
import {MobileView, BrowserView} from "react-device-detect";
import { Button, Card, Col, Container, Row, Form, Tabs, Tab, ListGroup, Nav } from 'react-bootstrap';
import style from '../assets/style.png'
import dp from '../assets/dp.png'
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.jpeg'
import pic3 from '../assets/3.webp'
import pic4 from '../assets/4.jpeg'

import {faAngleDown, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const appointments = [
    {
        id: 1,
        name: "Leanne Graham",
        date: "30/08/2021",
        time: "20:00",
        img: dp,
    },
    {
        id: 1,
        name: "Jennifer Moore",
        date: "05/09/2021",
        time: "20:00",
        img: pic1,
    },
    {
        id: 1,
        name: "Emily Ash",
        date: "29/08/2021",
        time: "06:00",
        img: pic3,
    },
    {
        id: 1,
        name: "Mohammed Ali",
        date: "13/09/2021",
        time: "06:00",
        img: pic2,
    },
    {
        id: 1,
        name: "Natalie King",
        date: "13/09/2021",
        time: "07:00",
        img: pic4,
    },
    ];
const CardList = ({ appointments }) => {
    const cardsArray = appointments.map(appointment => (
        <Card className={'card-appointment'} >
            <Card.Body>
                <Row>
                    <Col md={4} className={'pb-2'}>
                        <img width="70px" height="70px" src={appointment.img} alt="" style={{borderRadius: '50%'}}/>
                    </Col>
                    <Col className={'mt-3 ml-5'}>
                        <h6 className={'appointment-title'}>{appointment.name}</h6>
                        <h7 className={'appointment-subtitle'}><span style={{color: '#284E95'}}><FontAwesomeIcon icon={faCalendarAlt} /></span> {appointment.date} {appointment.time}</h7>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} style={{padding: '5px'}}>
                        <Button className={'button gray'}>Reject</Button>
                    </Col>
                    <Col  style={{padding: '5px'}}>
                        <Button className={'button blue'}>Accept</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    ));

    return (
        <div>
            {cardsArray}
        </div>
    );
};
const UpcomingList = ({ appointments }) => {
    const cardsArray = appointments.map(appointment => (
        <Card className={'card-appointment'} >
            <Card.Body>
                <Row>
                    <Col md={4} className={'pb-2'}>
                        <img width="70px" height="70px" src={appointment.img} alt="" style={{borderRadius: '50%'}}/>
                    </Col>
                    <Col className={'mt-3 ml-5'}>
                        <h6 className={'appointment-title'}>{appointment.name}</h6>
                        <h7 className={'appointment-subtitle'}><span style={{color: '#284E95'}}><FontAwesomeIcon icon={faCalendarAlt} /></span> {appointment.date} {appointment.time}</h7>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    ));

    return (
        <div>
            {cardsArray}
        </div>
    );
};


class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="site-section bg-image-home overlay" style={{ position: 'relative' }}>
                        <BrowserView>
                            <Container fluid className="h-100">
                                <Row className="justify-content-center align-items-center no-gutters h-100">
                                    <Col xs="12" sm="12" md="3" lg="3" style={{alignSelf: 'start', paddingTop: 50}}>
                                        <h4 className={'title'}>Welcome Emily</h4>
                                        <h7 className={'subtitle'}>How can we help you?</h7>
                                        <br/><br/><br/>
                                        <h6><Link className={'link col-2'} to="/schedule">Define available slots ></Link></h6>
                                        <br/>
                                        <h6><Link className={'link col-2'} to="/">Appointment requests ></Link></h6>

                                        <img width="300px" height="200px" src={style} alt="" style={{bottom: 0, position: 'fixed'}}/>
                                    </Col>
                                    <Col xs="12" sm="12" md="9" lg="9">
                                        <Card style={{ fontSize: 'small', backgroundColor: '#F4F4F4', borderColor:'#F4F4F4', height: '80vh', top: 30, right: 20 }} className={'homeCard'}>
                                            <Card.Body>
                                                <Row style={{ marginBottom: '40px' }}>
                                                    <Col md={4}>
                                                        <h5 className={'booking'}>New booking</h5>

                                                        <div style={{overflowY: 'scroll',
                                                            float: 'left',
                                                            height:'570px',
                                                            position:'relative'}}>
                                                            <CardList appointments={appointments} />
                                                        </div>

                                                    </Col>
                                                    <Col md={4}>
                                                        <h5 className={'booking'}>Upcoming</h5>

                                                        <div style={{overflowY: 'scroll',
                                                            float: 'left',
                                                            height:'570px',
                                                            position:'relative'}}>
                                                            <UpcomingList appointments={appointments} />
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <h5 className={'booking'}>Past appointments</h5>
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
