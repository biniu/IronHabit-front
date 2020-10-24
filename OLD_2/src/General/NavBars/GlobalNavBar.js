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
      <Navbar.Brand className={'navElem'} href="#home">
        <FontAwesomeIcon icon={faHome} />Iron Habit
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={'navBarDark'}>
        <Nav className={'navBarDark mr-auto'}>
          <Nav.Link className={'navElem'} href="#">Dashboard</Nav.Link>
          <Nav.Link className={'navElem'} href="#">Campaigns</Nav.Link>
          <Nav.Link className={'navElem'} href="#">Quests</Nav.Link>
          <Nav.Link className={'navElem'} href="#">Habits</Nav.Link>
          <Nav.Link className={'navElem'} href="#">Dailies</Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup className={'mb'}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" className={'navElemButtons'}>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className={'navElemButtons'}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button className={'navElemButtons'}>
            <FontAwesomeIcon icon={faCogs} />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNavBar;
