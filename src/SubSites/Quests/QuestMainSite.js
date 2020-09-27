import React from "react";

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import './Quest.css'

import QuestAddForm from "./QuestAddForm";
import QuestList from "./QuestList";



export default function QuestMainSite() {
  return (
    //style={{backgroundColor: 'blue'}}
    <Container fluid >
      <Row>
        <Col lg={12}>
        </Col>
      </Row>
      <Row className={'content'}>
        <Col lg={2}>
        </Col>
        <Col lg={9} className={'questConrainer'}>
          <h1>Quest List</h1>
          <QuestAddForm />
          <QuestList />
        </Col>
        <Col lg={1}>
        </Col>
      </Row>
    </Container>

  );
}
