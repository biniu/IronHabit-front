import React, { Component } from 'react'

import {
  Row,
  Col,
} from 'react-bootstrap';

import { faHome, faBars, faCogs, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { RenderHabits } from './RenderHabits';
import { RenderHero } from './RenderHero'
import { RenderProjects } from './RenderProjects';
import { RenderTasks } from '../Tasks/RenderDashboardTasks';
import { RenderDailies } from './RenderDailies';

import { GlobalNavbar } from '../GlobalNavbar'
import { DashboardSideBar } from './DashboardSideBar'

class Dashboard extends Component {
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
    const content = <div>
      <Row>
        <Col md="6" className="content"> <RenderHero /> </Col>
        <Col md="6" className="content"> <RenderProjects /> </Col>
      </Row>
      <Row>
        <Col md="4" className="content"> <RenderTasks /> </Col>
        <Col md="4" className="content"> <RenderHabits /> </Col>
        <Col md="4" className="content"> <RenderDailies /> </Col>
      </Row>
    </div>
    const side_bar_content = <DashboardSideBar />
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }

}

export default Dashboard