import React from "react";

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import QuestAddForm from "./QuestAddForm";
import QuestList from "./QuestList";



export default function QuestMainSite() {
  return (
    //style={{backgroundColor: 'blue'}}
    <Container fluid >
      <Row >
        <Col lg={12}>
          MENU
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        </Col>
        <Col lg={9}>
          <QuestAddForm />
          <QuestList />
        </Col>
        <Col lg={1}>
        </Col>
      </Row>
    </Container>

  );
}
