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
          {this.props.name}
        </label>
      </div>
    );
  }
}



class GetTasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      taskList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/task")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result")
          console.log(result)
          this.setState({
            isLoaded: true,
            taskList: result
          });
        },
        (error) => {
          console.log("error")
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, taskList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (taskList === undefined) {
      return <div>Task is undefined</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        taskList.map((task) =>
          <TaskEntrance name={task.name} />
        )
      );
    }
  }
}



export function RenderTasks() {

  return (
    <Container fluid>
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
            <GetTasksList />
            {/* {TaskList} */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
