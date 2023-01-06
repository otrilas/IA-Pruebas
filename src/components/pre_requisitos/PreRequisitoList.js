import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const PreRequisitoList = () => {
const [prerequisito, setPreRequisito] = useState([]);

useEffect(()=>{
    getPreRequisito();
},[]);

const getPreRequisito = async ()=>{
    const response = await axios.get("http://localhost:5000/prerequisitos");
    setPreRequisito(response.data); 
}

const deletePreRequisito = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/prerequisitos/${id}`);
        getPreRequisito();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/prerequisitos/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_materia_antiguas</th>
            <th>id_materia_presente</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {prerequisito.map((prerequisito, index) => (
                    <tr key={prerequisito.id}>
                    <td>{index + 1}</td>
                    <td>{prerequisito.id_materia_antiguas}</td>
                    <td>{prerequisito.id_materia_presente}</td>
                    <td>{prerequisito.estado}</td>
                    <td>
                        <Link to={`edit/${prerequisito.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deletePreRequisito(prerequisito.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default PreRequisitoList;