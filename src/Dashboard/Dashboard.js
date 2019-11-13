import React, { Component } from 'react'

import {
  Row,
  Col,
} from 'react-bootstrap';

// Import components for sections
import { RenderHabits } from './RenderDashboardHabits';
import { RenderHero } from './RenderDashboardHero'
import { RenderProjects } from './RenderDashboardProjects';
import { RenderTasks } from './RenderDashboardTasks';
import { RenderDailies } from './RenderDashboardDailies';

// Import nav bars
import { DashboardSideBar } from './DashboardSideBar'
import { GlobalNavbar } from '../General/NavBars/GlobalNavbar'


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
    // Define site content
    const content = <div>
      <Row>
        <Col md="6" className="content">
          <RenderHero />
        </Col>
        <Col md="6" className="content">
          <RenderProjects />
        </Col>
      </Row>
      <Row>
        <Col md="4" className="content">
          <RenderTasks />
        </Col>
        <Col md="4" className="content">
          <RenderHabits />
        </Col>
        <Col md="4" className="content">
          <RenderDailies />
        </Col>
      </Row>
    </div>

    // Define side bar content
    const side_bar_content = <DashboardSideBar />

    // Render site
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }

}

export default Dashboard