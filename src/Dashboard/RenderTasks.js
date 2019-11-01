import React from 'react';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  InputGroup,
  FormControl,
  Dropdown
} from 'react-bootstrap';

import { faSort, faFilter, faSearch, faTags, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GetTagMenu } from '../TagMenu';
import { GetFilterDropdown } from '../FilterDropdown'
import { GetSortDropdown } from '../SortDropdown'

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
              {/* <NavItem>
                <input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </NavItem> */}
              <InputGroup className="mb">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                />
              </InputGroup>
              <NavItem>
                <Dropdown>
                  <Dropdown.Toggle>
                    <FontAwesomeIcon icon={faSortAmountDownAlt}/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-s2">Abnother action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3d">vaSomething else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <GetTagMenu /> */}
              </NavItem>
              <NavItem>
                <Dropdown>
                  <Dropdown.Toggle>
                    <FontAwesomeIcon icon={faFilter}/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-s2">Abnother action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3d">vaSomething else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <GetFilterDropdown /> */}
              </NavItem>
              <NavItem>
                <Dropdown>
                  <Dropdown.Toggle>
                    <FontAwesomeIcon icon={faTags}/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-s2">Abnother action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3d">vaSomething else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <GetTagMenu /> */}
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
