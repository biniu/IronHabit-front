import React, { Component } from 'react'

import { RenderHabits } from '../Dashboard/RenderHabits';
import { GlobalNavbar } from '../GlobalNavbar'
class Habits extends Component {
  render() {
    const content = <div>
      <RenderHabits />
    </div>
    return (
      <GlobalNavbar content={content} />
    )
  }
}

export default Habits