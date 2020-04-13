import React from 'react';
import { Link } from 'react-router-dom'

export function ProjectSideBar() {
  return (
    <div>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Project TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Project TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Project TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Project TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Project TODO</div></Link>
    </div>
  )
}