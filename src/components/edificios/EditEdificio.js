import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditEdificio = () => {
const [id_facultad, setIdFacultad] = useState("");    
const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");
const [latitud, setLatitud] = useState("");
const [longitud, setLongitud] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getEdificioById();
},[]);

const updateEdificio = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/edificios/${id}`,{
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

const getEdificioById = async () => {
    const response = await axios.get(`http://localhost:5000/edificios/${id}`);
    setIdFacultad(response.data.id_facultad);
    setNombre(response.data.nombre);
    setDescripcion(response.data.descripcion);
    setLatitud(response.data.latitud);
    setLongitud(response.data.longitud);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateEdificio}>
               <div className="field">
                    <label className='label'>id_facultad </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={id_facultad} 
                            onChange = {(e) => setIdFacultad(e.target.value)} 
                            placeholder='id_facultad' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>Nombre </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre} 
                            onChange = {(e) => setNombre(e.target.value)} placeholder='nombre' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>Descripcion </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={descripcion} 
                            onChange = {(e) => setDescripcion(e.target.value)} placeholder='Descripcion' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>latitud </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={latitud} 
                            onChange = {(e) => setLatitud(e.target.value)} placeholder='latitud' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>longitud </label>
                    <div className="control">
                        <input 
                            type="text" 
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
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditEdificio;