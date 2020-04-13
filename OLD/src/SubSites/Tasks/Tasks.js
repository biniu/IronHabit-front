import React, { Component } from 'react'

import { RenderTasks } from './RenderTasks';

// Import nav bars
import { TasksSideBar } from './TasksSideBar'
import { GlobalNavbar } from '../../General/NavBars/GlobalNavbar'


class Tasks extends Component {
  render() {
    // Define site content
    const content = <div>
      <RenderTasks />
    </div>

    // Define side bar content
    const side_bar_content = <TasksSideBar />

    // Render site
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Tasks