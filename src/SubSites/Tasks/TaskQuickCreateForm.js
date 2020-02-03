
import React, { Component } from 'react';

import {
  Container,
  Row,
  Form,
} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import Moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

class PickDate extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.props.handleDate(date)
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export class TaskQuickCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: '',
      task_priority: 5,
      task_project: 1,
      task_deadline: '',

      // projectList: this.props.projectList,
    }

  }

  handleUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDeadline = (deadline) => {
    this.setState({ ["task_deadline"]: deadline });
  }

  projectEntrance = (project) => {
    return <option value={project.id}>{project.name}</option>
  }

  listProjects = () => {
    const optionList = this.props.projectList.map(project => {
      return this.projectEntrance(project);
    })
    return (
      <Form.Control as="select" name="task_project"
        value={this.state.task_project}
        onChange={this.handleUserInput}
      >
        {optionList}
        {/* <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option> */}

      </Form.Control>
    )
  }

  createTask = async (e) => {
    e.preventDefault();
    if (this.state.task_name.length > 0) {
      const response = await fetch('http://localhost:3001/task', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.task_name,
          priority: this.state.task_priority,
          project: this.state.task_project,
          deadline: this.state.task_deadline,
        })
      })

      this.props.refreshTasks();
    }
  }

  render() {
    return (
      <Container>
        <Form >
          <Form.Group as={Row}>
            <Form.Control type="text" rows="12" required name="task_name"
              placeholder="Task name"
              value={this.state.task_name}
              onChange={this.handleUserInput}
            />
          </Form.Group>

          <Form.Group as={Row} inline style={{ float: 'left' }}>
            <Form.Label >
              <button className="btn btn-primary"
                onClick={this.createTask}
              >
                Create task
              </button>
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} inline style={{ float: 'right' }}>

            <Form.Label >
              {<PickDate handleDate={this.handleDeadline} />}
            </Form.Label>

            <Form.Label >
              {this.listProjects()}
              {/* <Form.Control as="select" name="task_project"
                value={this.state.task_project}
                onChange={this.handleUserInput}
              >
                <option value="5">Project</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control> */}
            </Form.Label>

            <Form.Label >
              <Form.Control as="select" name="task_difficulty"
                value={this.state.task_difficulty}
                onChange={this.handleUserInput}
              >
                <option value="5">Difficulty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label >
              <Form.Control as="select" name="task_priority"
                value={this.state.task_priority}
                onChange={this.handleUserInput}
              >
                <option value="5">Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Label>
            {/*
            <Form.Label  >
              <Form.Control as="select">
                <option>Tag</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Label> */}

          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default TaskQuickCreateForm;
