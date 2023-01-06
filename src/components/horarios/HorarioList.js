import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const HorarioList = () => {
const [horario, setHorario] = useState([]);

useEffect(()=>{
    getHorario();
},[]);

const getHorario = async ()=>{
    const response = await axios.get("http://localhost:5000/horarios");
    setHorario(response.data); 
}

const deleteHorario = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/horarios/${id}`);
        getHorario();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/horarios/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Id Dia</th>
            <th>Id Hora</th>
            <th>id Ambiente</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {horario.map((horario, index) => (
                    <tr key={horario.id}>
                    <td>{index + 1}</td>
                    <td>{horario.id_dia}</td>
                    <td>{horario.id_hora}</td>
                    <td>{horario.id_ambiente}</td>
                    <td>{horario.estado}</td>
                    <td>
                        <Link to={`edit/${horario.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteHorario(horario.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default HorarioList;