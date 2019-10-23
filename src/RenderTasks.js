import React from 'react';

import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Nav,
  NavItem,
} from 'react-bootstrap';

import { GetTagMenu } from './TagMenu';
import { GetFilterDropdown } from './FilterDropdown'
import { GetSortDropdown } from './SortDropdown'

class TaskEntrance extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.props.name)
  }

  render() {
    return (
      <div>
        <label>
          <input className="taskCheckbox" type="checkbox"
            onChange={this.handleChange} />
          Task {this.props.name}
        </label>
      </div>
    );
  }
}

export function RenderTasks() {

  const TaskList = [
    <TaskEntrance name="1" />,
    <TaskEntrance name="2" />,
    <TaskEntrance name="3" />,
    <TaskEntrance name="4" />,
    <TaskEntrance name="5" />,
    <TaskEntrance name="6" />,
    <TaskEntrance name="7" />,
    <TaskEntrance name="7" />,
    <TaskEntrance name="7" />,
  ]

  return (
    <Container fluid>
      {/* <Row>
        <Col md="6"> Tasks </Col>
        <Col md="2">
          <button className="button">Sort</button>
        </Col>
        <Col md="2">
          <button className="button">Filter</button>
        </Col>
        <Col md="2">
          <button className="button">Tags</button>
        </Col>
      </Row> */}
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home"> Tasks </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <NavItem>
              <Button>Search</Button>
            </NavItem>
            <NavItem>
              <GetSortDropdown />
            </NavItem>
            <NavItem>
              <GetFilterDropdown />
            </NavItem>
            <NavItem>
              <GetTagMenu />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Row>Add a ToDo</Row>
      <Row>
        <Col className="Tasks">
          <div className="rowTasks">
            {TaskList}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
