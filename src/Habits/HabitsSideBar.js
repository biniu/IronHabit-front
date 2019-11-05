import React from 'react';
import { Link } from 'react-router-dom'

export function HabitsSideBar() {
  return (
    <div>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Habits TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Habits TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Habits TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Habits TODO</div></Link>
      <Link to="#ToDo"><div className="list-group-item list-group-item-action">Habits TODO</div></Link>
    </div>
  )
}