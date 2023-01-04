import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const PisoList = () => {
const [piso, setUser] = useState([]);

useEffect(()=>{
    getPiso();
},[]);

const getPiso = async ()=>{
    const response = await axios.get("http://localhost:5000/pisos");
    setUser(response.data); 
}

const deletePiso = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/pisos/${id}`);
        getPiso();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/pisos/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_edificio</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {piso.map((piso, index) => (
                    <tr key={piso.id}>
                    <td>{index + 1}</td>
                    <td>{piso.id_edificio}</td>
                    <td>{piso.nombre}</td>
                    <td>{piso.descripcion}</td>
                    <td>{piso.estado}</td>
                    <td>
                        <Link to={`edit/${piso.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deletePiso(piso.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default PisoList;