import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditAmbiente = () => {
const [id_docente, setIdDocente] = useState("");
const [id_materia, setIdMateria] = useState("");
const [id_gestion, setIdGestion] = useState("");
const [id_horario, setIdHorario] = useState("");
const [grupo, setGrupo] = useState("");
const [max_estudiantes, setMaxEstudiantes] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getAsignacionById();
},[]);

const updateAsignacion = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/asignaciones/${id}`,{
            id_docente,
            id_materia,
            id_gestion,
            id_horario,
            grupo,
            max_estudiantes,
            estado
        });
        navigate("/asignaciones/")
    } catch (error) {
        console.log(error);
    }
}

const getAsignacionById = async () => {
    const response = await axios.get(`http://localhost:5000/asignaciones/${id}`);
    setIdDocente(response.data.id_docente);
    setIdMateria(response.data.id_materia);
    setIdGestion(response.data.id_gestion);
    setIdHorario(response.data.id_horario);
    setGrupo(response.data.grupo);
    setMaxEstudiantes(response.data.max_estudiantes);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateAsignacion}>
            <div className="field">
                    <label className='label'>Id Docente </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_docente} 
                            onChange = {(e) => setIdDocente(e.target.value)} 
                            placeholder='Docente' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Materia </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_materia} 
                            onChange = {(e) => setIdMateria(e.target.value)} 
                            placeholder='Materia' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Gestion </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_gestion} 
                            onChange = {(e) => setIdGestion(e.target.value)} 
                            placeholder='Gestion' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id Horario </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_horario} 
                            onChange = {(e) => setIdHorario(e.target.value)} placeholder='Horario' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>grupo </label>
                    <div className="control">
                        <input 
                            type="numbre" 
                            className='input' 
                            value={grupo} 
                            onChange = {(e) => setGrupo(e.target.value)} placeholder='grupo' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>max_estudiantes </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={max_estudiantes} 
                            onChange = {(e) => setMaxEstudiantes(e.target.value)} placeholder='max_estudiantes' />
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

export default EditAmbiente;