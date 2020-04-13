import React from 'react';
import { Link } from 'react-router-dom'

export function DashboardSideBar() {
  return (
    <div>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DashboardSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DashboardSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DashboardSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DashboardSideBar TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">DashboardSideBar TODO</div></Link>
    </div>
  )
}