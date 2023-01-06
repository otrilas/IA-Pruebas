import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const CronogramaList = () => {
const [cronograma, setCronograma] = useState([]);

useEffect(()=>{
    getCronograma();
},[]);

const getCronograma = async ()=>{
    const response = await axios.get("http://localhost:5000/cronogramas");
    setCronograma(response.data); 
}

const deleteCronograma = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/cronogramas/${id}`);
        getCronograma();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/cronogramas/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id programaciones</th>
            <th>primer_parcial</th>
            <th>segundo_parcial</th>
            <th>examen_final</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {cronograma.map((cronograma, index) => (
                    <tr key={cronograma.id}>
                    <td>{index + 1}</td>
                    <td>{cronograma.id_programaciones}</td>
                    <td>{cronograma.primer_parcial}</td>
                    <td>{cronograma.segundo_parcial}</td>
                    <td>{cronograma.examen_final}</td>
                    <td>
                        <Link to={`edit/${cronograma.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteCronograma(cronograma.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default CronogramaList;