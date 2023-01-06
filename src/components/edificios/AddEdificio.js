import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:5000';

const AddEdificio = () => {
const [id_facultad, setIdFacultad] = useState("");    
const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");
const [latitud, setLatitud] = useState("");
const [longitud, setLongitud] = useState("");
const [estado, setEstado] = useState("1");

const [facultades, setFacultades] = useState([]);

const navigate = useNavigate();

const saveEdificio = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/edificios',{
            id_facultad,
            nombre,
            descripcion,
            latitud,
            longitud,
            estado
        });
        navigate("/edificios/")
    } catch (error) {
        console.log(error);
    }
}

    useEffect(() => {
        fetch(`${SERVER}/facultades`)
            .then((response) => response.json())
            .then((data) => {
                setFacultades(data);
            })
            .catch((err) => console.log(err));
    }, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveEdificio}>
               <div className="field">
                    <label className='label'>id_facultad </label>
                    <div className="control">
                            <select
                                name='facultad_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdFacultad(e.target.value);
                                }}
                            >
                                {facultades.map(({ id, nombre }) => {
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
                    <label className='label'>Descripcion </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={descripcion} 
                            onChange = {(e) => setDescripcion(e.target.value)} placeholder='decripcion' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>latitud </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={latitud} 
                            onChange = {(e) => setLatitud(e.target.value)} placeholder='latitud' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>Longitud </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={longitud} 
                            onChange = {(e) => setLongitud(e.target.value)} placeholder='longitud' />
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

export default AddEdificio;