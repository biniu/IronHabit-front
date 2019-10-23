import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';

export function RenderHero() {
  return (
    // <img src={logo} className="Hero-avatar" alt="logo" />
    // <p>a</p>
    // <p>a</p>
    // <p>a</p>
    <Container fluid>
      <Row>
        <Col md="6">
          <img src={logo} className="Hero-avatar" alt="logo" />
        </Col>
        <Col md="6">
          <div>Hero name</div>
          <div>Life</div>
          <div>Mana</div>
          <div>Stamina</div>
        </Col>
      </Row>
    </Container>
  );
}