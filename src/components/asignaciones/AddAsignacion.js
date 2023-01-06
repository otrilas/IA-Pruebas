import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:5000';

const AddAsignacion = () => {
const [id_docente, setIdDocente] = useState("");
const [id_materia, setIdMateria] = useState("");
const [id_gestion, setIdGestion] = useState("");
const [id_horario, setIdHorario] = useState("");
const [grupo, setGrupo] = useState("");
const [max_estudiantes, setMaxEstudiantes] = useState("");
const [estado, setEstado] = useState("1");

const [docentes, setDocentes] = useState([]);
const [materias, setMaterias] = useState([]);
const [gestiones, setGestiones] = useState([]);
const [horarios, setHorarios] = useState([]);
const navigate = useNavigate();

const saveAsignacion = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/asignaciones',{
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
useEffect(() => {
    fetch(`${SERVER}/docentes`)
        .then((response) => response.json())
        .then((data) => {
            setDocentes(data);
        })
        .catch((err) => console.log(err));

    fetch(`${SERVER}/materias`)
        .then((response) => response.json())
        .then((data) => {
            setMaterias(data);
        })
        .catch((err) => console.log(err));
    
    fetch(`${SERVER}/gestiones`)
        .then((response) => response.json())
        .then((data) => {
            setGestiones(data);
        })
        .catch((err) => console.log(err));
    
    fetch(`${SERVER}/horarios`)
        .then((response) => response.json())
        .then((data) => {
            setHorarios(data);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveAsignacion}>
            <div className="field">
                    <label className='label'>Id Docente </label>
                    <div className="control">
                    <select
                                name='docente_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdDocente(e.target.value);
                                }}
                            >
                                {docentes.map(({ id, titulo }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {titulo}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Materia </label>
                    <div className="control">
                            <select
                                name='materia_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdMateria(e.target.value);
                                }}
                            >
                                {materias.map(({ id, nombre }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {nombre}
                                        </option>
                                    );
                                })}
                            </select>  
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Gestion </label>
                    <div className="control">
                            <select
                                name='gestion_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdGestion(e.target.value);
                                }}
                            >
                                {gestiones.map(({ id, nombre }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {nombre}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id Horario </label>
                    <div className="control">
                            <select
                                name='horario_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdHorario(e.target.value);
                                }}
                            >
                                {horarios.map(({ id, id_dia }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {id_dia}
                                        </option>
                                    );
                                })}
                            </select>
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
                    <button type='submit' className='button is-success'> Guardar</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default AddAsignacion;