import React from "react";
import PropTypes from "prop-types";
import {Button, Col, Container, Row} from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer footer-default">
        <Container fluid>
          <Row xs="2" noGutters className="align-items-center">
                <Col xs="12" md={'12'} className={'copyright'}>
                    <p className="my-2">Copyrights © {1900 + new Date().getYear()} NovaLabs. All rights reserved &emsp; Terms and conditions &emsp; Privacy policy</p>
                </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

// Footer.propTypes = {
//   default: PropTypes.bool,
//   fluid: PropTypes.bool,
// };

export default Footer;
