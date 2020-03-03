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
  Dropdown,
  Form,

} from 'react-bootstrap';

import { faFilter, faSearch, faTags, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment';
// import Popup from "reactjs-popup";

import { TaskEntrance } from "./TaskEntrance"
import { TaskCreateForm } from "./TaskCreateForm"
import { TaskQuickCreateForm } from "./TaskQuickCreateForm"


export class RenderTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      tasks: [],
      projects: [],
      search: ""

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  renderTask = task => {

    let project_name = "";
    if (this.state.projects[task.project]) {
      project_name = this.state.projects[task.project]["name"]
    }

    return <TaskEntrance
      name={task.name}
      description={task.description}

      priority={task.priority}
      difficulty={task.difficulty}

      deadline={task.deadline}
      created={task.created}
      estimation={task.estimation}

      project={project_name}
    />

  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = async (event) => {
    console.log('A name was submitted: ' + this.state.value);

    event.preventDefault();
    const response = await fetch('http://localhost:3001/task', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.value,
      })
    })

    this.getData();

  }


  getData = () => {
    fetch("http://localhost:3001/task")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tasks: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch("http://localhost:3001/project")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result,
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

  render() {
    const { search } = this.state;
    let tasksToShow = this.state.tasks.filter(task => {
      return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    tasksToShow = tasksToShow.sort((a, b) => {
      return a.possition > b.possition ? 1 : -1;
    });


    return (
      <Container fluid>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home"> Tasks </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <InputGroup className="mb">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
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
                    <FontAwesomeIcon icon={faSortAmountDownAlt} />
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
                    <FontAwesomeIcon icon={faFilter} />
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
                    <FontAwesomeIcon icon={faTags} />
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

        {/* <Popup modal trigger={<button>Create task</button>}>
          <div>
            {<TaskCreateForm />}
          </div>
        </Popup> */}

        <Row>
          {<TaskQuickCreateForm
            refreshTasks={this.getData}
            projectList={this.state.projects}
          />}
        </Row>

        <Row>
          <Col className="Tasks">
            <div className="rowTasks">
              {tasksToShow.map(Task => {
                return this.renderTask(Task);
              })}
            </div>
          </Col>
        </Row>
      </Container >
    );
  }
}
