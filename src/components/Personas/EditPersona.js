import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditPersona = () => {
const [ci, setCi] = useState("");    
const [apellido_paterno, setApellidoPaterno] = useState("");
const [apellido_materno, setApellidoMaterno] = useState("");
const [nombre, setNombre] = useState("");
const [fecha_nacimiento, setFechaNacimiento] = useState("");
const [fotografia, setFotografia] = useState("");
const [celular, setCelular] = useState("");
const [email, setEmail] = useState("");
const [usuario, setUsuario] = useState("");
const [clave, setClave] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getPersonaById();
},[]);

const updatePersona = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/personas/${id}`,{
            ci,
            apellido_paterno,
            apellido_materno,
            nombre,
            fecha_nacimiento,
            fotografia,
            celular,
            email,
            usuario,
            clave,
            estado
        });
        navigate("/personas/")
    } catch (error) {
        console.log(error);
    }
}

const getPersonaById = async () => {
    const response = await axios.get(`http://localhost:5000/personas/${id}`);
    setCi(response.data.ci);
    setApellidoPaterno(response.data.apellido_paterno);
    setApellidoMaterno(response.data.apellido_materno);
    setNombre(response.data.nombre);
    setFechaNacimiento(response.data.fecha_nacimiento);
    setFotografia(response.data.fotografia);
    setCelular(response.data.celular);
    setEmail(response.data.email);
    setUsuario(response.data.usuario);
    setClave(response.data.clave);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updatePersona}>
            <div className="field">
                    <label className='label'>Ci </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={ci} 
                            onChange = {(e) => setCi(e.target.value)} 
                            placeholder='Id Area' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>apellido_paterno </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={apellido_paterno} 
                            onChange = {(e) => setApellidoPaterno(e.target.value)} placeholder='apellido_paterno' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>apellido_materno </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={apellido_materno} 
                            onChange = {(e) => setApellidoMaterno(e.target.value)} placeholder='apellido_materno' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>nombre </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre} 
                            onChange = {(e) => setNombre(e.target.value)} placeholder='nombre' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>fecha nacimiento </label>
                    <div className="control">
                        <input 
                            type="date" 
                            className='input' 
                            value={fecha_nacimiento} 
                            onChange = {(e) => setFechaNacimiento(e.target.value)} placeholder='fecha nacimiento' />
                    </div>
               </div>
               
               <div className="field">
                    <label className='label'>fotografia </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={fotografia} 
                            onChange = {(e) => setFotografia(e.target.value)} placeholder='fotografia' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>celular </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={celular} 
                            onChange = {(e) => setCelular(e.target.value)} placeholder='celular' />
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
                    <label className='label'>usuario </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={usuario} 
                            onChange = {(e) => setUsuario(e.target.value)} placeholder='usuario' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>clave </label>
                    <div className="control">
                        <input 
                            type="pasword" 
                            className='input' 
                            value={clave} 
                            onChange = {(e) => setClave(e.target.value)} placeholder='Clave' />
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

export default EditPersona;