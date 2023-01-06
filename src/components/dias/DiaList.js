import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const DiaList = () => {
const [dia, setDia] = useState([]);

useEffect(()=>{
    getDia();
},[]);

const getDia = async ()=>{
    const response = await axios.get("http://localhost:5000/dias");
    setDia(response.data); 
}

const deleteDia = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/dias/${id}`);
        getDia();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/dias/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>codigo</th>
            <th>nombre</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {dia.map((dia, index) => (
                    <tr key={dia.id}>
                    <td>{index + 1}</td>
                    <td>{dia.codigo}</td>
                    <td>{dia.nombre}</td>
                    <td>{dia.estado}</td>
                    <td>
                        <Link to={`edit/${dia.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteDia(dia.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default DiaList;