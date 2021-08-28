import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, Card, Col , Row} from 'react-bootstrap';
import logo from '../assets/logo.png'
import avatar from '../assets/pp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class NavHeader extends React.Component {
	state={
		selectedItem: '',
	}
	render() {
		return (
			<Navbar expand="lg" style={{fontFamily: 'Poppins', fontSize: '14px', color: '#585858'}} className={'row'}>
					<div className={'col-2'} style={{paddingLeft: 20}}>
						<img width="155px" height="50px" src={logo} alt="" />
					</div>
					<div className={'col-8'}>
						<div className={'row'}>
							<Nav.Link className={'col-2'} to="/"
									  // as={Link}
							>
								<span>Appointments</span>
							</Nav.Link>

							<Nav.Link className={'col-2'} to="/schedule">
								<span>My Schedule</span>
							</Nav.Link>

							<Nav.Link className={'col-2'}>
								<span>Contact Us</span>
							</Nav.Link>
						</div>
					</div>
				<div className={'col-2'}>
					<div className={'row'} style={{alignItems: 'center'}}>
						<div className={'col-3'}>
						<img width="50px" height="50px" src={avatar} alt="" />
					</div>
						<div className={'col-9'}>
							<Nav.Link className={'col-4'} style={{width: '100%'}}>
								Emily Brown <FontAwesomeIcon icon={faAngleDown} />
							</Nav.Link>
						</div>
					</div>

				</div>
			</Navbar>
		);
	}
}

export default NavHeader;
