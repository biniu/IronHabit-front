import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import './App.css';

import { RenderHabits } from './RenderHabits';
import { RenderHero } from './RenderHero'
import { RenderProjects } from './RenderProjects';
import { RenderTasks } from './RenderTasks';


function App() {
  return (
    <Container fluid>
       <Row>
        <Col md="1" className="navigation">
        </Col>
        <Col md="11" className="contentContainer">
          <Row>
            <Col md="6" className="content"> <RenderHero /> </Col>
            <Col md="6" className="content"> <RenderHabits /> </Col>
          </Row>
          <Row>
            <Col md="6" className="content"> <RenderTasks /> </Col>
            <Col md="6" className="content"> <RenderProjects /> </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
