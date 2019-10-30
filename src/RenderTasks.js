import React from 'react';

import {
  Container,
  Row,
  Col,
  Navbar,
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

  handleChange(event) { }

  render() {
    return (
      <div>
        <label>
          <input className="taskCheckbox" type="checkbox"
            onChange={this.handleChange} />
          {this.props.name}
        </label>
      </div>
    );
  }
}


export class RenderTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      tasks: [],
      tasksToShow: [],
      search: ""
    }
  }

  componentWillMount() {
    console.log("componentWillMount")
    fetch("http://localhost:3001/task")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result,
            tasksToShow: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderTask = task => {
    return <TaskEntrance name={task.name} />
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredTasks = this.state.tasks.filter(task => {
      return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <Container fluid>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home"> Tasks </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <NavItem>
                <input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
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
              {filteredTasks.map(Task => {
                return this.renderTask(Task);
              })}
            </div>
          </Col>
        </Row>
      </Container >
    );
  }
}
