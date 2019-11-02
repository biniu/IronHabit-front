import React, { Component } from 'react'

import { GlobalNavbar } from '../GlobalNavbar'
import { RenderTasks } from '../Dashboard/RenderTasks';

class Tasks extends Component {
  render() {
    const content = <div>
      <RenderTasks />
    </div>
    return (
      <GlobalNavbar content={content} />
    )
  }
}

export default Tasks