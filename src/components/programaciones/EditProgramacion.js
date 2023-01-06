import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditProgramacion = () => {
const [id_estudiante, setIdEstudiante] = useState("");
const [id_asignacion, setIdAsignacion] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getProgramacionById();
},[]);

const updateProgramacion = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/programaciones/${id}`,{
            id_estudiante,
            id_asignacion,
            estado
        });
        navigate("/programaciones/")
    } catch (error) {
        console.log(error);
    }
}

const getProgramacionById = async () => {
    const response = await axios.get(`http://localhost:5000/programaciones/${id}`);
    setIdEstudiante(response.data.id_estudiante);
    setIdAsignacion(response.data.id_asignacion);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateProgramacion}>
               <div className="field">
                    <label className='label'>id_estudiante </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_estudiante} 
                            onChange = {(e) => setIdEstudiante(e.target.value)} 
                            placeholder='id_estudiante' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id_asignacion </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_asignacion} 
                            onChange = {(e) => setIdAsignacion(e.target.value)} placeholder='id_asignacion' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>Estado </label>
                    <div className="control">
                        <div className="select isfullwidth" >
                            <select value={estado} onChange = {(e) => setEstado(e.target.value)}>
                                <option value="1">Activo</option>
                                <option value="0">Desactivo</option>
                            </select>
                        </div>
                    </div>
               </div>

               <div className="field">
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditProgramacion;