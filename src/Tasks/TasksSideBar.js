import React from 'react';
import { Link } from 'react-router-dom'

export function TasksSideBar() {
  return (
    <div>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Tasks TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Tasks TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Tasks TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Tasks TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Tasks TODO</div></Link>
    </div>
  )
}