import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const CarreraList = () => {
const [carrera, setCarrera] = useState([]);

useEffect(()=>{
    getCarrera();
},[]);

const getCarrera = async ()=>{
    const response = await axios.get("http://localhost:5000/carreras");
    setCarrera(response.data); 
}

const deleteCarrera = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/carreras/${id}`);
        getCarrera();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/carreras/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_facultad</th>
            <th>nombre</th>
            <th>nombre_abreviado</th>
            <th>fecha_creacion</th>
            <th>descripcion</th>
            <th>direccion</th>
            <th>telefono</th>
            <th>logo</th>
            <th>email</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {carrera.map((carrera, index) => (
                    <tr key={carrera.id}>
                    <td>{index + 1}</td>
                    <td>{carrera.id_facultad}</td>
                    <td>{carrera.nombre}</td>
                    <td>{carrera.nombre_abreviado}</td>
                    <td>{carrera.fecha_creacion}</td>
                    <td>{carrera.descripcion}</td>
                    <td>{carrera.direccion}</td>
                    <td>{carrera.telefono}</td>
                    <td>{carrera.logo}</td>
                    <td>{carrera.email}</td>
                    <td>{carrera.estado}</td>
                    <td>
                        <Link to={`edit/${carrera.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteCarrera(carrera.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default CarreraList;