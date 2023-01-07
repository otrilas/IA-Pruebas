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
        <Link to={`/dias`} className='button is-small is-info'> dias</Link>
        </li>
        <li>
        <Link to={`/horas`} className='button is-small is-info'> horas</Link>
        </li>
        <li>
        <Link to={`/tipoambientes`} className='button is-small is-info'> tipo ambientes</Link>
        </li>
        <li>
        <Link to={`/gestiones`} className='button is-small is-info'> Gestiones</Link>
        </li>
        <li>
        <Link to={`/personas`} className='button is-small is-info'> personas</Link>
        </li>
        <li>
        <Link to={`/pisos`} className='button is-small is-info'> pisos</Link>
        </li>
        <li>
        <Link to={`/estudiantes`} className='button is-small is-info'> estudiantes</Link>
        </li>
        <li>
        <Link to={`/docentes`} className='button is-small is-info'> docentes</Link>
        </li>
        <li>
        <Link to={`/facultades`} className='button is-small is-info'> facultades</Link>
        </li>
        <li>
        <Link to={`/carreras`} className='button is-small is-info'> carreras</Link>
        </li>
        <li>
        <Link to={`/materias`} className='button is-small is-info'> materias</Link>
        </li>
        <li>
        <Link to={`/edificios`} className='button is-small is-info'> Edificios</Link>
        </li>
        <li>
          <Link to={`/ambientes`} className='button is-small is-info'> Ambientes</Link>
        </li>
        <li>
        <Link to={`/horarios`} className='button is-small is-info'> horarios</Link>
        </li>
        <li>
          <Link to={`/asignaciones`} className='button is-small is-info'> Asignaciones</Link>
        </li>
        <li>
        <Link to={`/prerequisitos`} className='button is-small is-info'> PreRequisitos</Link>
        </li>
        <li>
        <Link to={`/programaciones`} className='button is-small is-info'> programaciones</Link>
        </li>
        <li>
        <Link to={`/cronogramas`} className='button is-small is-info'> cronogramas</Link>
        </li>
        
      </ul>
    </aside>
  </div>
  )
}

export default Navbar;