import React, { Component } from 'react'

import { RenderProjects } from './RenderProjects';

// Import nav bars
import { ProjectSideBar } from './ProjectSideBar'
import { GlobalNavbar } from '../../General/NavBars/GlobalNavbar'


class Projects extends Component {
  render() {
    // Define site content
    const content = <div>
      <RenderProjects />
    </div>

    // Define side bar content
    const side_bar_content = <ProjectSideBar />

    // Render site
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Projects