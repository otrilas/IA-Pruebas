import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <aside className="menu pl-2 has-shadow">
      <p className="menu-label">Rol de Examenes</p>
      <ul className="menu-list">
        <li>
          <Link to={`/areas`} className='button is-small is-info'> Areas</Link>
        </li>
        <li>
        <Link to={`/gestiones`} className='button is-small is-info'> Gestiones</Link>
        </li>
        <li>
        <Link to={`/edificios`} className='button is-small is-info'> Edificios</Link>
        </li>
      </ul>
    </aside>
  </div>
  )
}

export default Navbar;