import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
const SERVER = 'http://localhost:5000';

const EditDocente = () => {
const [id_persona, setIdPersona] = useState("");
const [titulo, setTitulo] = useState("");
const [curriculo, setCurriculo] = useState("");
const [estado, setEstado] = useState("1");

const [personas, setPersonas] = useState([]);
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getDocenteById();
},[]);

const updateDocente = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/docentes/${id}`,{
            id_persona,
            titulo,
            curriculo,
            estado
        });
        navigate("/docentes/")
    } catch (error) {
        console.log(error);
    }
}

const getDocenteById = async () => {
    const response = await axios.get(`http://localhost:5000/docentes/${id}`);
    setIdPersona(response.data.id_persona);
    setTitulo(response.data.titulo);
    setCurriculo(response.data.curriculo);
    setEstado(response.data.estado);
}
useEffect(() => {
    fetch(`${SERVER}/personas`)
        .then((response) => response.json())
        .then((data) => {
            setPersonas(data);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateDocente}>
               <div className="field">
                    <label className='label'>Id Persona </label>
                    <div className="control">
                            <select
                                name='area_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdPersona(e.target.value);
                                }}
                            >
                                {personas.map(({ id, nombre }) => {
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
                    <label className='label'>Titulo </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={titulo} 
                            onChange = {(e) => setTitulo(e.target.value)} 
                            placeholder='titulo' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>curriculo </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={curriculo} 
                            onChange = {(e) => setCurriculo(e.target.value)} placeholder='curriculo' />
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

export default EditDocente;