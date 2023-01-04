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
        <li>
        <Link to={`/carreras`} className='button is-small is-info'> carreras</Link>
        </li>
        <li>
        <Link to={`/dias`} className='button is-small is-info'> dias</Link>
        </li>
        <li>
        <Link to={`/facultades`} className='button is-small is-info'> facultades</Link>
        </li>
        <li>
        <Link to={`/horas`} className='button is-small is-info'> horas</Link>
        </li>
        <li>
        <Link to={`/personas`} className='button is-small is-info'> personas</Link>
        </li>
        <li>
        <Link to={`/pisos`} className='button is-small is-info'> pisos</Link>
        </li>
        <li>
        <Link to={`/tipoambientes`} className='button is-small is-info'> tipo ambientes</Link>
        </li>
      </ul>
    </aside>
  </div>
  )
}

export default Navbar;