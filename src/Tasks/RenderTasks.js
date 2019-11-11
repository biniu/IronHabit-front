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

class TaskEntrance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      priority: "",
      difficulty: "",
      deadline: "",
      created: "",
      estimation: "",
      project: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { }

  render() {
    return (
      <Container fluid>
        <Row className="TaskRow">
          <Col className="TaskColCheckBox">
            {/* TODO(biniu) icons to find */}
            {/* TODO(biniu) put it in middle of heigh  */}
            <label>
              <input className="taskCheckbox" type="checkbox"
                onChange={this.handleChange} />
            </label>
          </Col>
          <Col className="TaskColPriority">
            {/* TODO(biniu) icons to find */}
            {/* TODO(biniu) put it in middle of heigh  */}
            <div className="TaskEntrance">{this.props.priority}</div>
          </Col>
          <Col>
            <Row>
              <Col>{this.props.name}</Col>
              <Col className="TaskColTime">
                {Moment(this.props.deadline).format('d MMM')}
              </Col>
              <Col className="TaskColTime">
                {Moment(this.props.estimation).format('d MMM')}
              </Col>
              <Col className="TaskColTime">
                {/* TODO(biniu) think about pomodore */}
                logged
              </Col>
            </Row>
            <Row>
              <Col>
                {this.props.description}
              </Col>
            </Row>
          </Col>
          <Col className="TaskColProject">
            project name {this.props.project}
          </Col>
          <Col className="TaskColTags">
            TAGS
          </Col>
        </Row>
      </Container >
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  renderTask = task => {
    return <TaskEntrance
      name={task.name}
      description={task.description}

      priority={task.priority}
      difficulty={task.difficulty}

      deadline={task.deadline}
      created={task.created}
      estimation={task.estimation}

      project={task.project}
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
        // secondParam: 'yourOtherValue',
      })
    })

    console.log("DUPA")
    this.getData();

  }


  getData = () => {
    console.log("getData")
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


  render() {
    console.log("render")
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


        <Row>
          <Form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </Form>
        </Row>

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
