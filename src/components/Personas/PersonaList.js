import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const PersonaList = () => {
const [persona, setUser] = useState([]);

useEffect(()=>{
    getPersona();
},[]);

const getPersona = async ()=>{
    const response = await axios.get("http://localhost:5000/personas");
    setUser(response.data); 
}

const deletePersona = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/personas/${id}`);
        getPersona();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/personas/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>ci</th>
            <th>apellido_paterno</th>
            <th>apellido_materno</th>
            <th>nombre</th>
            <th>fecha_nacimiento</th>
            <th>fotografia</th>
            <th>celular</th>
            <th>email</th>
            <th>usuario</th>
            <th>clave</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {persona.map((persona, index) => (
                    <tr key={persona.id}>
                    <td>{index + 1}</td>
                    <td>{persona.ci}</td>
                    <td>{persona.apellido_paterno}</td>
                    <td>{persona.apellido_materno}</td>
                    <td>{persona.nombre}</td>
                    <td>{persona.fecha_nacimiento}</td>
                    <td>{persona.fotografia}</td>
                    <td>{persona.celular}</td>
                    <td>{persona.email}</td>
                    <td>{persona.usuario}</td>
                    <td>{persona.clave}</td>
                    <td>{persona.estado}</td>
                    <td>
                        <Link to={`edit/${persona.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deletePersona(persona.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default PersonaList;