import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AsignacionList = () => {
const [asignacion, setAsignacion] = useState([]);

useEffect(()=>{
    getAsignacion();
},[]);

const getAsignacion = async ()=>{
    const response = await axios.get("http://localhost:5000/asignaciones");
    setAsignacion(response.data); 
}

const deleteAsignacion = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/asignaciones/${id}`);
        getAsignacion();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/asignaciones/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id Docente</th>
            <th>Id Materia</th>
            <th>id Gestion</th>
            <th>id Horario</th>
            <th>Grupo</th>
            <th>max_estudiantes</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {asignacion.map((asignacion, index) => (
                    <tr key={asignacion.id}>
                    <td>{index + 1}</td>
                    <td>{asignacion.id_docente}</td>
                    <td>{asignacion.id_materia}</td>
                    <td>{asignacion.id_gestion}</td>
                    <td>{asignacion.id_horario}</td>
                    <td>{asignacion.grupo}</td>
                    <td>{asignacion.max_estudiantes}</td>
                    <td>{asignacion.estado}</td>
                    <td>
                        <Link to={`edit/${asignacion.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteAsignacion(asignacion.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default AsignacionList;