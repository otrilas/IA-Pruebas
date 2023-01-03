import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const GestionList = () => {
const [gestion, setUser] = useState([]);

useEffect(()=>{
    getGestion();
},[]);

const getGestion = async ()=>{
    const response = await axios.get("http://localhost:5000/gestiones");
    setUser(response.data); 
}

const deleteGestion = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/gestiones/${id}`);
        getGestion();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/gestiones/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>numero</th>
            <th>nombre</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {gestion.map((gestion, index) => (
                    <tr key={gestion.id}>
                    <td>{index + 1}</td>
                    <td>{gestion.numero}</td>
                    <td>{gestion.nombre}</td>
                    <td>{gestion.estado}</td>
                    <td>
                        <Link to={`edit/${gestion.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteGestion(gestion.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default GestionList;