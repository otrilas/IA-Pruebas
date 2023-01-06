import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AmbienteList = () => {
const [ambiente, setAmbiente] = useState([]);

useEffect(()=>{
    getAmbiente();
},[]);

const getAmbiente = async ()=>{
    const response = await axios.get("http://localhost:5000/ambientes");
    setAmbiente(response.data); 
}

const deleteAmbiente = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/ambientes/${id}`);
        getAmbiente();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/ambientes/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id Piso</th>
            <th>Id Tipo Ambiente</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {ambiente.map((ambiente, index) => (
                    <tr key={ambiente.id}>
                    <td>{index + 1}</td>
                    <td>{ambiente.id_piso}</td>
                    <td>{ambiente.id_tipo_ambiente}</td>
                    <td>{ambiente.nombre}</td>
                    <td>{ambiente.descripcion}</td>
                    <td>{ambiente.estado}</td>
                    <td>
                        <Link to={`edit/${ambiente.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteAmbiente(ambiente.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default AmbienteList;