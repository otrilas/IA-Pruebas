import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AreaList = () => {
const [areas, setAreas] = useState([]);

useEffect(()=>{
    getAreas();
},[]);

const getAreas = async ()=>{
    const response = await axios.get("http://localhost:5000/areas");
    setAreas(response.data); 
}

const deleteArea = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/areas/${id}`);
        getAreas();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/areas/add`} className="button is-success"> Nueva </Link>
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
            {areas.map((areas, index) => (
                    <tr key={areas.id}>
                    <td>{index + 1}</td>
                    <td>{areas.nombre}</td>
                    <td>{areas.descripcion}</td>
                    <td>{areas.estado}</td>
                    <td>
                        <Link to={`edit/${areas.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteArea(areas.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default AreaList;