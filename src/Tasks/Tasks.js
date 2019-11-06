import React, { Component } from 'react'

import { GlobalNavbar } from '../GlobalNavbar'
import { RenderTasks } from './RenderTasks';
import { TasksSideBar } from './TasksSideBar'
class Tasks extends Component {
  render() {
    const content = <div>
      <RenderTasks />
    </div>
    const side_bar_content = <TasksSideBar />
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Tasks