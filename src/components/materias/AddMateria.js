import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:5000';

const AddMateria = () => {
const [id_carrera, setIdCarrera] = useState("");    
const [nombre, setNombre] = useState("");
const [nombre_abreviado, setNombreAbreviado] = useState("");
const [sigla, setSigla] = useState("");
const [creditos, setCreditos] = useState("");
const [horas_teoricas, setHorasTeoricas] = useState("");
const [horas_practicas, setHorasPracticas] = useState("");
const [horas_laboratorios, setHorasLaboratorios] = useState("");
const [nivel, setNivel] = useState("");
const [estado, setEstado] = useState("1");

const [carreras, setCarreras] = useState([]);
const navigate = useNavigate();

const saveMateria = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/materias',{
            id_carrera,
            nombre,
            nombre_abreviado,
            sigla,
            creditos,
            horas_teoricas,
            horas_practicas,
            horas_laboratorios,
            nivel,
            estado
        });
        navigate("/materias/")
    } catch (error) {
        console.log(error);
    }
};

    useEffect(()=>{
        fetch(`${SERVER}/carreras`)
            .then((response)=> response.json())
            .then((data) => {
                setCarreras(data);
            })
            .catch((err) => console.log(err))
    },[]);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveMateria}>
               <div className="field">
                    <label className='label'>id carrera </label>
                    <div className="control">
                            <select
                                name='carrera_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdCarrera(e.target.value);
                                }}
                            >
                                {carreras.map(({ id, nombre }) => {
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
                    <label className='label'>Nombre </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre} 
                            onChange = {(e) => setNombre(e.target.value)} placeholder='Nombre' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>nombre abreviado </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre_abreviado} 
                            onChange = {(e) => setNombreAbreviado(e.target.value)} placeholder='Nombre Abreviado' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>sigla</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={sigla} 
                            onChange = {(e) => setSigla(e.target.value)} placeholder=' sigla' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>creditos </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={creditos} 
                            onChange = {(e) => setCreditos(e.target.value)} placeholder='creditos' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>horas_teoricas </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={horas_teoricas} 
                            onChange = {(e) => setHorasTeoricas(e.target.value)} placeholder='horas_teoricas' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>horas_practicas </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={horas_practicas} 
                            onChange = {(e) => setHorasPracticas(e.target.value)} placeholder='horas_practicas' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>horas_laboratorios </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={horas_laboratorios} 
                            onChange = {(e) => setHorasLaboratorios(e.target.value)} placeholder='horas_laboratorios' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>nivel </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nivel} 
                            onChange = {(e) => setNivel(e.target.value)} placeholder='nivel' />
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

export default AddMateria;