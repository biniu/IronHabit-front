import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Moment from 'moment';

export class TaskEntrance extends React.Component {
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
            {this.props.project}
          </Col>
          <Col className="TaskColTags">
            TAGS
          </Col>
        </Row>
      </Container >
    );
  }
}

