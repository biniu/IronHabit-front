import React, { Component } from 'react'

import { RenderDailies } from './RenderDailies';

// Import nav bars
import { DailiesSideBar } from './DailiesSideBar'
import { GlobalNavbar } from '../../General/NavBars/GlobalNavbar'


class Dailies extends Component {
  render() {
    // Define site content
    const content = <div>
      <RenderDailies />
    </div>

    // Define side bar content
    const side_bar_content = <DailiesSideBar />

    // Render site
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Dailies