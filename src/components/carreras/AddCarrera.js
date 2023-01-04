import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCarrera = () => {
const [id_facultad, setIdFacultad] = useState("");    
const [nombre, setNombre] = useState("");
const [nombre_abreviado, setNombreAbreviado] = useState("");
const [fecha_creacion, setFechaCreacion] = useState("");
const [descripcion, setDescripcion] = useState("");
const [direccion, setDireccion] = useState("");
const [telefono, setTelefono] = useState("");
const [logo, setLogo] = useState("");
const [email, setEmail] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveCarrera = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/carreras',{
            id_facultad,
            nombre,
            nombre_abreviado,
            fecha_creacion,
            descripcion,
            direccion,
            telefono,
            logo,
            email,
            estado
        });
        navigate("/carreras/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveCarrera}>
               <div className="field">
                    <label className='label'>id_facultad </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_facultad} 
                            onChange = {(e) => setIdFacultad(e.target.value)} 
                            placeholder='Id facultad' />
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
                    <label className='label'>fecha creacion </label>
                    <div className="control">
                        <input 
                            type="date" 
                            className='input' 
                            value={fecha_creacion} 
                            onChange = {(e) => setFechaCreacion(e.target.value)} placeholder='fecha creacion' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>decripcion </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={descripcion} 
                            onChange = {(e) => setDescripcion(e.target.value)} placeholder='descripcion' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>direccion </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={direccion} 
                            onChange = {(e) => setDireccion(e.target.value)} placeholder='direccion' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>telefono </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={telefono} 
                            onChange = {(e) => setTelefono(e.target.value)} placeholder='telefono' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>logo </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={logo} 
                            onChange = {(e) => setLogo(e.target.value)} placeholder='logo' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>email </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={email} 
                            onChange = {(e) => setEmail(e.target.value)} placeholder='email' />
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

export default AddCarrera;