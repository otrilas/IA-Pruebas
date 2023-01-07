import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
const SERVER = 'http://localhost:5000';

const EditFacultad = () => {
const [id_area, setIdArea] = useState("");    
const [nombre, setNombre] = useState("");
const [nombre_abreviado, setNombreAbreviado] = useState("");
const [fecha_creacion, setFechaCreacion] = useState("");
const [descripcion, setDescripcion] = useState("");
const [direccion, setDireccion] = useState("");
const [telefono, setTelefono] = useState("");
const [email, setEmail] = useState("");
const [logo, setLogo] = useState("");
const [escudo, setEscudo] = useState("");
const [estado, setEstado] = useState("1");

const [areas, setAreas] = useState([]);
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getFacultadById();
},[]);

const updateFacultad = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/facultades/${id}`,{
            id_area,
            nombre,
            nombre_abreviado,
            fecha_creacion,
            descripcion,
            direccion,
            telefono,
            email,
            logo,
            escudo,
            estado
        });
        navigate("/facultades/")
    } catch (error) {
        console.log(error);
    }
}

const getFacultadById = async () => {
    const response = await axios.get(`http://localhost:5000/facultades/${id}`);
    setIdArea(response.data.id_area);
    setNombre(response.data.nombre);
    setNombreAbreviado(response.data.nombre_abreviado);
    setFechaCreacion(response.data.fecha_creacion);
    setDescripcion(response.data.descripcion);
    setDireccion(response.data.direccion);
    setTelefono(response.data.telefono);
    setEmail(response.data.email);
    setLogo(response.data.logo);
    setEscudo(response.data.escudo);
    setEstado(response.data.estado);
}
useEffect(()=>{
    fetch(`${SERVER}/areas`)
        .then((response)=> response.json())
        .then((data) => {
            setAreas(data);
        })
        .catch((err) => console.log(err))
},[]);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateFacultad}>
               <div className="field">
                    <label className='label'>id_area </label>
                    <div className="control">
                            <select
                                name='area_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdArea(e.target.value);
                                }}
                            >
                                {areas.map(({ id, nombre }) => {
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
                    <label className='label'>escudo </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={escudo} 
                            onChange = {(e) => setEscudo(e.target.value)} placeholder='escudo' />
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

export default EditFacultad;