import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const EdificioList = () => {
const [edificio, setUser] = useState([]);

useEffect(()=>{
    getEdificio();
},[]);

const getEdificio = async ()=>{
    const response = await axios.get("http://localhost:5000/edificios");
    setUser(response.data); 
}

const deleteEdificio = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/edificios/${id}`);
        getEdificio();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/edificios/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_facultad</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>latitud</th>
            <th>longitud</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {edificio.map((edificio, index) => (
                    <tr key={edificio.id}>
                    <td>{index + 1}</td>
                    <td>{edificio.id_facultad}</td>
                    <td>{edificio.nombre}</td>
                    <td>{edificio.descripcion}</td>
                    <td>{edificio.latitud}</td>
                    <td>{edificio.longitud}</td>
                    <td>{edificio.estado}</td>
                    <td>
                        <Link to={`edit/${edificio.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteEdificio(edificio.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default EdificioList;