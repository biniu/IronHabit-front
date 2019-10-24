import React from 'react';

import {
  Row,
  Col,
  Navbar,
  Button,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/sidebar.css'

import { RenderHabits } from './RenderHabits';
import { RenderHero } from './RenderHero'
import { RenderProjects } from './RenderProjects';
import { RenderTasks } from './RenderTasks';
import { RenderDailies } from './RenderDailies';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }

  toggleSideBar() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  render() {
    return (
      <div id="wrapper" className={(this.state.condition ? 'd-flex' : 'd-flex toggled')} >
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <Navbar bg="light" expand="lg">
            <Button onClick={this.toggleSideBar}>Menu</Button>
            <Navbar.Brand href="#home"> Iron Habit </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse> */}
          </Navbar>

          <div className="container-fluid">
            <Row>
              <Col md="6" className="content"> <RenderHero /> </Col>
              <Col md="6" className="content"> <RenderProjects /> </Col>
            </Row>
            <Row>
              <Col md="4" className="content"> <RenderTasks /> </Col>
              <Col md="4" className="content"> <RenderHabits /> </Col>
              <Col md="4" className="content"> <RenderDailies /> </Col>
            </Row>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
