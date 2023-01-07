import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDia = () => {
const [codigo, setCodigo] = useState("");    
const [nombre, setNombre] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveDia = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/dias',{
            codigo,
            nombre,
            estado
        });
        navigate("/dias/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveDia}>
               <div className="field">
                    <label className='label'>Codigo </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={codigo} 
                            onChange = {(e) => setCodigo(e.target.value)} 
                            placeholder='codigo' />
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

export default AddDia;