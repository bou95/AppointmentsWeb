import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {Card, Col, Container, Row} from "react-bootstrap";
import style from "../assets/style.png";
import {Link} from "react-router-dom";
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';


class Schedule extends React.Component {
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
                                        <ReactTimeslotCalendar
                                            initialDate={moment().format()}
                                            timeslots = { [
                                                ['9'], ['10'], ['11'], ['12'], ['13'], ['14'], ['15'],
                                            ] }
                                        />
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

export default Schedule;
