import React, { Component } from 'react'

import { RenderDailies } from '../Dashboard/RenderDailies';
import { GlobalNavbar } from '../GlobalNavbar'
class Dailies extends Component {
  render() {
    const content = <div>
      <RenderDailies />
    </div>
    return (
      <GlobalNavbar content={content} />
    )
  }
}

export default Dailies