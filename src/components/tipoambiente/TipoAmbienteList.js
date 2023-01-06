import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const TipoAmbienteList = () => {
const [tipoambiente, setTipoAmbiente] = useState([]);

useEffect(()=>{
    getTipoAmbiente();
},[]);

const getTipoAmbiente = async ()=>{
    const response = await axios.get("http://localhost:5000/tipoambientes");
    setTipoAmbiente(response.data); 
}

const deleteTipoAmbiente = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/tipoambientes/${id}`);
        getTipoAmbiente();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/tipoambientes/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {tipoambiente.map((tipoambiente, index) => (
                    <tr key={tipoambiente.id}>
                    <td>{index + 1}</td>
                    <td>{tipoambiente.nombre}</td>
                    <td>{tipoambiente.descripcion}</td>
                    <td>{tipoambiente.estado}</td>
                    <td>
                        <Link to={`edit/${tipoambiente.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteTipoAmbiente(tipoambiente.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default TipoAmbienteList;