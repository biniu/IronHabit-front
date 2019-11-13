import React, { Component } from 'react'

import { RenderHabits } from './RenderHabits';

// Import nav bars
import { HabitsSideBar } from './HabitsSideBar'
import { GlobalNavbar } from '../../General/NavBars/GlobalNavbar'


class Habits extends Component {
  render() {
    // Define site content
    const content = <div>
      <RenderHabits />
    </div>

    // Define side bar content
    const side_bar_content = <HabitsSideBar />

    // Render site
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Habits