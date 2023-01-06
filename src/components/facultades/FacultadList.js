import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const FacultadList = () => {
const [facultad, setFacultad] = useState([]);

useEffect(()=>{
    getFacultad();
},[]);

const getFacultad = async ()=>{
    const response = await axios.get("http://localhost:5000/facultades");
    setFacultad(response.data); 
}

const deleteFacultad = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/facultades/${id}`);
        getFacultad();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/facultades/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_area</th>
            <th>nombre</th>
            <th>nombre_abreviado</th>
            <th>fecha_creacion</th>
            <th>descripcion</th>
            <th>direccion</th>
            <th>telefono</th>
            <th>email</th>
            <th>logo</th>
            <th>escudo</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {facultad.map((facultad, index) => (
                    <tr key={facultad.id}>
                    <td>{index + 1}</td>
                    <td>{facultad.id_area}</td>
                    <td>{facultad.nombre}</td>
                    <td>{facultad.nombre_abreviado}</td>
                    <td>{facultad.fecha_creacion}</td>
                    <td>{facultad.descripcion}</td>
                    <td>{facultad.direccion}</td>
                    <td>{facultad.telefono}</td>
                    <td>{facultad.email}</td>
                    <td>{facultad.logo}</td>
                    <td>{facultad.escudo}</td>
                    <td>{facultad.estado}</td>
                    <td>
                        <Link to={`edit/${facultad.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteFacultad(facultad.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default FacultadList;