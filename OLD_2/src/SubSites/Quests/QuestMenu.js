import React, {Fragment} from 'react';
import {
  Col,
  Container,

  Row
} from "react-bootstrap";

import './Quest.css';

export const QuestMenu = (props) => {

  return <Container fluid className={'navBar'}>
    <Row>
      <Col className={'navElem text-left'}>
        Inbox
      </Col>
    </Row>

    <Row>
      <Col className={'navElem text-left'}>
        Today
      </Col>
    </Row>

    <Row>
      <Col className={'navElem text-left'}>
        Show sub quests
      </Col>
    </Row>

    <Row>
      <Col className={'navElem text-left'}>
        Projects
      </Col>
    </Row>

    <Row>
      <Col className={'navElem text-left'}>
        Tags
      </Col>
    </Row>

    <Row>
      <Col className={'navElem text-left'}>
        Filters
      </Col>
    </Row>

  </Container>;


};
