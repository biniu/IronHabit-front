import React from 'react';
import { Link } from 'react-router-dom'

export function DailiesSideBar() {
  return (
    <div>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DailiesSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DailiesSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DailiesSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DailiesSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DailiesSideBar TODO</div></Link>
    </div>
  )
}