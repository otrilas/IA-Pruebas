import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditDocente = () => {
const [id_persona, setIdPersona] = useState("");
const [titulo, setTitulo] = useState("");
const [curriculo, setCurriculo] = useState("");
const [estado, setEstado] = useState("1");
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

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateDocente}>
               <div className="field">
                    <label className='label'>Id Persona </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_persona} 
                            onChange = {(e) => setIdPersona(e.target.value)} 
                            placeholder='id persona' />
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