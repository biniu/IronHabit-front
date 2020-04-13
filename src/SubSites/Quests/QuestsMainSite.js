import React, { Component } from 'react'

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
// Import nav bars
import { GlobalNavBar } from '../../General/NavBars/GlobalNavBar'


class QuestsMainSite extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <GlobalNavBar />
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default QuestsMainSite;
