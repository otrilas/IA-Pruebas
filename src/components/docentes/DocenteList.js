import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const DocenteList = () => {
const [docente, setDocente] = useState([]);

useEffect(()=>{
    getDocente();
},[]);

const getDocente = async ()=>{
    const response = await axios.get("http://localhost:5000/docentes");
    setDocente(response.data); 
}

const deleteDocente = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/docentes/${id}`);
        getDocente();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/docentes/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id Persona</th>
            <th>titulo</th>
            <th>curriculo</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {docente.map((docente, index) => (
                    <tr key={docente.id}>
                    <td>{index + 1}</td>
                    <td>{docente.id_persona}</td>
                    <td>{docente.titulo}</td>
                    <td>{docente.curriculo}</td>
                    <td>{docente.estado}</td>
                    <td>
                        <Link to={`edit/${docente.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteDocente(docente.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default DocenteList;