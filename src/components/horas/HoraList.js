import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const HoraList = () => {
const [hora, setHora] = useState([]);

useEffect(()=>{
    getHora();
},[]);

const getHora = async ()=>{
    const response = await axios.get("http://localhost:5000/horas");
    setHora(response.data); 
}

const deleteHora = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/horas/${id}`);
        getHora();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/horas/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>hora inicio</th>
            <th>hora fin</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {hora.map((hora, index) => (
                    <tr key={hora.id}>
                    <td>{index + 1}</td>
                    <td>{hora.hora_inicio}</td>
                    <td>{hora.hora_fin}</td>
                    <td>{hora.estado}</td>
                    <td>
                        <Link to={`edit/${hora.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteHora(hora.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default HoraList;