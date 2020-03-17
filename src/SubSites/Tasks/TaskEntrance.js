import React from 'react';

import {
  Container,
} from 'react-bootstrap';

import Moment from 'moment';
import Popup from 'reactjs-popup';
import './modal.css';


export class TaskEntrance extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  updateTask = async (e) => {
    e.preventDefault();
    if (Number.isInteger(this.props.tID)) {
      const response = await fetch('http://localhost:3001/task/' + this.props.tID, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.props.name + " DONE!",
        })
      })

      this.props.refreshTasks();
    }
  }

  render = () => {
    const darkBackground = {
      background: 'grey',
      margin: '5px',
    };

    const taskContent = <div className="col-md-11">
      <div className="row">
        <div className="col-md-1">
          <span className="badge badge-default">
            {this.props.priority}
          </span>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <h4 className="text-left">
                {this.props.name}
              </h4>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <span className="badge badge-default">
                    deadline
                  </span>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-default">
                    created
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <span className="badge badge-default">
                    estimation
                  </span>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-default">
                    logged
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6>
                {this.props.description}
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

    const popUpContent = (close) => (
      <div className="modal_1">
        {/* <a className="close" onClick={close}>*/}
        {/*            &times;*/}
        {/* </a>*/}
        <div className="header"> Quest details </div>
        <div className="content">
          <h3>{this.props.name}</h3>
          <h6>{this.props.description}</h6>

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

    return <Container fluid >

      <div className="row" style={darkBackground}>
        <div className="col-md-1">
          <div className={'checkbox'} onClick={this.updateTask}></div>
          {/*<input type="checkbox" ></input>*/}
        </div>

        <Popup trigger={taskContent} modal closeOnDocumentClick>
          {popUpContent}
        </Popup>

      </div>


    </Container>;
  };
  props;
}
