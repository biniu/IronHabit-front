import React, { Component } from 'react'

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// Import nav bars
import {GlobalNavBar} from '../../General/NavBars/GlobalNavBar'
import {QuestQuickAdd} from './QuestQuickAdd'

class QuestsMainSite extends Component {
  render() {
    return <Container fluid>
      <Row >
        <Col >
          <GlobalNavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestQuickAdd/>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={8}>

          </Col>
          <Col lg={2}>
          </Col>
        </Row>
      </Row>
    </Container>;
  }
}

export default QuestsMainSite;
