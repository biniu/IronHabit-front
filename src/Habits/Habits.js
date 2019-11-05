import React, { Component } from 'react'

import { RenderHabits } from '../Dashboard/RenderHabits';
import { GlobalNavbar } from '../GlobalNavbar'
import { HabitsSideBar } from './HabitsSideBar'
class Habits extends Component {
  render() {
    const content = <div>
      <RenderHabits />
    </div>
    const side_bar_content = <HabitsSideBar />
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Habits