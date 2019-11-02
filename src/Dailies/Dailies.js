import React, { Component } from 'react'

import { RenderDailies } from '../Dashboard/RenderDailies';
import { GlobalNavbar } from '../GlobalNavbar'
import { DailiesSideBar } from './DailiesSideBar'
class Dailies extends Component {
  render() {
    const content = <div>
      <RenderDailies />
    </div>
    const side_bar_content = <DailiesSideBar />
    return (
      <GlobalNavbar content={content} side_bar_content={side_bar_content} />
    )
  }
}

export default Dailies