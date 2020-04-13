import React from 'react';

import {
  Navbar,
  Nav,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCogs, faHome, faSearch} from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

/**
 * Render navigation bar for whole site
 * @return NavBar
 * @constructor
 */
export function GlobalNavBar() {
  return (
    <Navbar className={'navBarMain'}>
      <Navbar.Brand href="#home">
        <FontAwesomeIcon icon={faHome} />Iron Habit
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={'navBarDark'}>
        <Nav className={'navBarDark mr-auto'}>
          <Nav.Link className={'navLink'} href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/tasks">Tasks</Nav.Link>
          <Nav.Link href="/habits">Habits</Nav.Link>
          <Nav.Link href="/dailies">Dailies</Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup className="mb">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
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
  );
}

export default GlobalNavBar;
