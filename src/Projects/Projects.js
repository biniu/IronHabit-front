import React, { Component } from 'react'

import { RenderProjects } from '../Dashboard/RenderProjects';
import { GlobalNavbar } from '../GlobalNavbar'
class Projects extends Component {
  render() {
    const content = <div>
      <RenderProjects />
    </div>
    return (
      <GlobalNavbar content={content} />
    )
  }
}

export default Projects