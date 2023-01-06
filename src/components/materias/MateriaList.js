import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const MateriaList = () => {
const [materia, setMateria] = useState([]);

useEffect(()=>{
    getMateria();
},[]);

const getMateria = async ()=>{
    const response = await axios.get("http://localhost:5000/materias");
    setMateria(response.data); 
}

const deleteMateria = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/materias/${id}`);
        getMateria();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to ={`/materias/add`} className="button is-success"> Nueva </Link>
      <table className='table is-striped is fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>id_carrera</th>
            <th>nombre</th>
            <th>nombre_abreviado</th>
            <th>sigla</th>
            <th>creditos</th>
            <th>horas_teoricas</th>
            <th>horas_practicas</th>
            <th>horas_laboratorios</th>
            <th>nivel</th>
            <th>estado</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
            {materia.map((materia, index) => (
                    <tr key={materia.id}>
                    <td>{index + 1}</td>
                    <td>{materia.id_carrera}</td>
                    <td>{materia.nombre}</td>
                    <td>{materia.nombre_abreviado}</td>
                    <td>{materia.sigla}</td>
                    <td>{materia.creditos}</td>
                    <td>{materia.horas_teoricas}</td>
                    <td>{materia.horas_practicas}</td>
                    <td>{materia.horas_laboratorios}</td>
                    <td>{materia.nivel}</td>
                    <td>{materia.estado}</td>
                    <td>
                        <Link to={`edit/${materia.id}`} className='button is-small is-info'> Edit</Link>
                        <button onClick={()=>deleteMateria(materia.id)} className='button is-small is-danger'> Eliminar</button>
                    </td>
                  </tr>
            ))}
          
        </tbody>
      </table> 
    </div>
  </div> 
  )
}

export default MateriaList;