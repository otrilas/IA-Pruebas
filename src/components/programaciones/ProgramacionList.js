import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const ProgramacionList = () => {
const [programacion, setProgramacion] = useState([]);

useEffect(()=>{
    getProgramacion();
},[]);

const getProgramacion = async ()=>{
    const response = await axios.get("http://localhost:5000/programaciones");
    setProgramacion(response.data); 
}

const deleteProgramacion = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/programaciones/${id}`);
        getProgramacion();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/programaciones/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_estudiante</th>
            <th>id_asignacion</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {programacion.map((programacion, index) => (
                    <tr key={programacion.id}>
                    <td>{index + 1}</td>
                    <td>{programacion.id_materia_antiguas}</td>
                    <td>{programacion.id_materia_presente}</td>
                    <td>{programacion.estado}</td>
                    <td>
                        <Link to={`edit/${programacion.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteProgramacion(programacion.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default ProgramacionList;