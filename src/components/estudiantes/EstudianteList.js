import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const EstudianteList = () => {
const [estudiante, setEstudiante] = useState([]);

useEffect(()=>{
    getEstudiante();
},[]);

const getEstudiante = async ()=>{
    const response = await axios.get("http://localhost:5000/estudiantes");
    setEstudiante(response.data); 
}

const deleteEstudiante = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/estudiantes/${id}`);
        getEstudiante();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/estudiantes/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id Persona</th>
            <th>cu</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {estudiante.map((estudiante, index) => (
                    <tr key={estudiante.id}>
                    <td>{index + 1}</td>
                    <td>{estudiante.id_persona}</td>
                    <td>{estudiante.cu}</td>
                    <td>{estudiante.estado}</td>
                    <td>
                        <Link to={`edit/${estudiante.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteEstudiante(estudiante.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default EstudianteList;