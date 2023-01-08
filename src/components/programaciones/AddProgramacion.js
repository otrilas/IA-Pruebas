import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:5000';

const AddProgramacion = () => {
const [id_estudiante, setIdEstudiante] = useState("");
const [id_asignacion, setIdAsignacion] = useState("");
const [estado, setEstado] = useState("1");

const [estudiantes, setEstudiantes] = useState([]);
const [asignaciones, setAsignaciones] = useState([]);

const navigate = useNavigate();

const saveProgramacion = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/programaciones',{
            id_estudiante,
            id_asignacion,
            estado
        });
        navigate("/programaciones/")
    } catch (error) {
        console.log(error);
    }
}
    useEffect(() => {
        fetch(`${SERVER}/estudiantes`)
            .then((response) => response.json())
            .then((data) => {
                setEstudiantes(data);
            })
            .catch((err) => console.log(err));
        
        fetch(`${SERVER}/asignaciones`)
        .then((response) => response.json())
        .then((data) => {
            setAsignaciones(data);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveProgramacion}>
               <div className="field">
                    <label className='label'>id_estudiante </label>
                    <div className="control">
                            <select
                                name='estudiante_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdEstudiante(e.target.value);
                                }}
                            >
                                {estudiantes.map(({ id, cu }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {cu}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id_asignacion </label>
                    <div className="control">
                            <select
                                name='asignacion_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdAsignacion(e.target.value);
                                }}
                            >
                                {asignaciones.map(({ id, grupo }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {grupo}
                                        </option>
                                    );
                                })}
                            </select>
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

export default AddProgramacion;