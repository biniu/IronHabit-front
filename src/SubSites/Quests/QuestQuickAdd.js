import React, {Component} from 'react';

import {
  Container,
  Row,
  Form,
} from 'react-bootstrap';

import {PickDate} from '../../General/PickDate';

export class QuestQuickAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: '',
      task_priority: 5,
      task_project: 1,
      task_deadline: '',

      // projectList: this.props.projectList,
    };
  }

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleDeadline = (deadline) => {
    this.setState({['task_deadline']: deadline});
  }

  projectEntrance = (project) => {
    return <option value={project.id}>{project.name}</option>;
  }

  listProjects = () => {
    const optionList = this.props.projectList.map((project) => {
      return this.projectEntrance(project);
    });
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
    );
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
          tags: this.state.task_tag,
        }),
      });

      this.props.refreshTasks();
    }
  }

  render() {
    return (
      <Container fluid className={'questAddForm'}>
        <Form >
          <Form.Group as={Row}>
            <Form.Control type="text" rows="12" required name="task_name"
              placeholder="Quest name"
              value={this.state.task_name}
              onChange={this.handleUserInput}
              className={'navElemButtons'}
            />
          </Form.Group>

          <Form.Group as={Row} inline style={{float: 'left'}}>
            <Form.Label >
              <button className={'btn btn-primary navElemButtons'}
                onClick={this.createTask}
              >
                Create quest
              </button>
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row} inline style={{float: 'right'}}>

            {/* TODO - looks shhity*/}
            <Form.Label className={'navElemButtons'}>
              {<PickDate handleDate={this.handleDeadline} />}
            </Form.Label>

            <Form.Label >
              {/* {this.listProjects()}*/}
              <Form.Control as="select" name="task_project"
                value={this.state.task_project}
                onChange={this.handleUserInput}
                className={'navElemButtons'}
              >
                <option value="5">Project</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Label>

            <Form.Label >
              <Form.Control as="select" name="task_difficulty"
                value={this.state.task_difficulty}
                onChange={this.handleUserInput}
                className={'navElemButtons'}
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
                className={'navElemButtons'}
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
              <Form.Control as="select" name="task_tag"
                            value={this.state.task_tag}
                            onChange={this.handleUserInput}
                            className={'navElemButtons'}
              >
                <option value="5">Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Label>

          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default QuestQuickAdd;
