import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
    <aside className="menu pl-2 has-shadow">
      <p className="menu-label">Rol de Examenes</p>
      <ul className="menu-list">
        <li>
          <Link to="/areas"> Areas</Link>
        </li>
        <li>
        <Link to="/gestiones"> Gestiones</Link>
        </li>
      </ul>
    </aside>
  </div>
  )
}

export default Sidebar;