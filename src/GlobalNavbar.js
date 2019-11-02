import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  Navbar,
  Button,
  Nav,
  Form,
  InputGroup,
  FormControl
} from 'react-bootstrap';

import { faHome, faBars, faCogs, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class GlobalNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      content: props.content,
      side_bar_content: props.side_bar_content
    };
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }

  toggleSideBar() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  render() {
    const content = this.state.content
    const side_bar_content = this.state.side_bar_content
    return (
      <div id="wrapper" className={(this.state.condition ? 'd-flex' : 'd-flex toggled')} >
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            {side_bar_content}
          </div>
        </div>

        <div id="page-content-wrapper">
          <Navbar bg="light" expand="lg">
            <Button onClick={this.toggleSideBar}><FontAwesomeIcon icon={faBars} /></Button>
            <Navbar.Brand href="#home"> <FontAwesomeIcon icon={faHome} />Iron Habit </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/tasks">Tasks</Nav.Link>
                <Nav.Link href="/habits">Habits</Nav.Link>
                <Nav.Link href="/dailies">Dailies</Nav.Link>
              </Nav>
              <Form inline>
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
                <Button ><FontAwesomeIcon icon={faCogs} /></Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div className="container-fluid">
            {content}
          </div>

        </div>
      </div>
    )
  }

}

export default GlobalNavbar