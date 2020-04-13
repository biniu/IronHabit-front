import React from 'react';

import {Container, Form, Row} from 'react-bootstrap';
import Popup from 'reactjs-popup';

import moment from 'moment';

import './modal.css';
import DatePicker from "react-datepicker";

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

export class TaskEntrance extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  updateTask = async (e) => {
    e.preventDefault();
    if (Number.isInteger(this.props.taskDetails.id)) {
      const response = await fetch('http://localhost:3001/task/' + this.props.taskDetails.id, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: !this.props.taskDetails.status,
        }),
      });

      this.props.refreshTasks();
    }
  }

  render = () => {
    const questToDo = {
      background: 'black',
      margin: '5px',
    };

    const questDone = {
      background: 'grey',
      margin: '5px',
    };

    const taskContent = <div className="col-md-11">
      <div className="row">
        <div className="col-md-1">
          <span className="badge badge-default">
            {this.props.taskDetails.priority}
          </span>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <h4 className="text-left">
                {this.props.taskDetails.name}
              </h4>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <span className="badge badge-default">
                    D {moment(this.props.taskDetails.deadline).format('D M')}
                  </span>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-default">
                    C {moment(this.props.taskDetails.created).format('D M')}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <span className="badge badge-default">
                    estimation???
                  </span>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-default">
                    logged???
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6>
                {this.props.taskDetails.description}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">
              <span className="badge badge-default">
                {this.props.project}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <span className="badge badge-default">
                Tags
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;

    const popUpContent = (close) => {
      return (
        <div className="modal_1">
          <div className="header"> Quest details</div>
          <div className="content">
            <h3>{this.props.taskDetails.name}</h3>
            <h6>{this.props.taskDetails.description}</h6>

            <h4>{this.props.project}</h4>

            <h4>Priority</h4>
            <h4>Difficulty</h4>

            <h4>Deadline</h4>
            <h4>Estimated time</h4>
            <h4>Log time</h4>
            <h4>Tags</h4>


          </div>
          <div className="actions">
            {/* STYLE alligment to left and right*/}
            <button className="button"
              onClick={() => {
                console.log('Cancel ');
                close();
              }}
            >
              Cancel
            </button>

            <button className="button"
              onClick={() => {
                console.log('Update ');
                close();
              }}
            >
              Update
            </button>

            <button className="button"
              onClick={() => {
                console.log('Delete ');
                close();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    };

    return <Container fluid >

      <div className="row" style={this.props.taskDetails.status ? questToDo : questDone}>
        <div className="col-md-1">
          <div className={'checkbox'} onClick={this.updateTask}></div>
        </div>

        <Popup trigger={taskContent} modal closeOnDocumentClick>
          {popUpContent}
        </Popup>

      </div>


    </Container>;
  };
  props;
}
