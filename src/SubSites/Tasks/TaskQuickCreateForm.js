
import React, { Component } from 'react';

import {
  Container,
  Row,
  Form,
} from 'react-bootstrap';


export class TaskQuickCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: '',
      task_priority: 5,
      task_project: 1,
    }

  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });

    console.log(name)
    console.log(value)
  }

  createTask = async (e) => {

    console.log(this.state.task_name)
    console.log(this.state.task_priority)
    console.log(this.state.task_project)

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

        })
      })

      // this.setState({ task_name: "" });
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

            <Form.Label >
              <Form.Control as="select" name="task_project"
                value={this.state.task_project}
                onChange={this.handleUserInput}
              >
                <option value="5">Project</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label  >
              <Form.Control as="select">
                <option>Tag</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Label>

          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default TaskQuickCreateForm;
