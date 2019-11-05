import React, { Component } from 'react'


import { RenderProjects } from '../Dashboard/RenderProjects';
import { GlobalNavbar } from '../GlobalNavbar'
import { ProjectSideBar } from './ProjectSideBar'
class Projects extends Component {
  render() {
    const content = <div>
      <RenderProjects />
    </div>

    const side_bar_content = <ProjectSideBar />
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Projects