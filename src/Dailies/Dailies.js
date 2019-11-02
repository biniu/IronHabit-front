import React, { Component } from 'react'


import {
  Navbar,
  Button,
} from 'react-bootstrap';

import { RenderDailies } from '../Dashboard/RenderDailies';

class Dailies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }

  toggleSideBar() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  render() {
    return (
      <div id="wrapper" className={(this.state.condition ? 'd-flex' : 'd-flex toggled')} >
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <Navbar bg="light" expand="lg">
            <Button onClick={this.toggleSideBar}>Menu</Button>
            <Navbar.Brand href="#home"> Iron Habit </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Navbar>
          <div className="container-fluid">
            <RenderDailies />
          </div>

        </div>
      </div>
    )
  }

}

export default Dailies