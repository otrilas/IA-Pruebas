import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const SERVER = 'http://localhost:5000';

const AddEstudiante = () => {
const [id_persona, setIdPersona] = useState("");
const [cu, setCU] = useState("");
const [estado, setEstado] = useState("1");

const [personas, setPersonas] = useState([]);
const navigate = useNavigate();

const saveEstudiante = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/estudiantes',{
            id_persona,
            cu,
            estado
        });
        navigate("/estudiantes/")
    } catch (error) {
        console.log(error);
    }
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
            <form onSubmit={saveEstudiante}>
            <div className="field">
                    <label className='label'>Id persona </label>
                    <div className="control">
                            <select
                                name='perosna_id'
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
                    <label className='label'>C U </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={cu} 
                            onChange = {(e) => setCU(e.target.value)} 
                            placeholder='c u' />
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

export default AddEstudiante;