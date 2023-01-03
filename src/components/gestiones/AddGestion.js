import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGestion = () => {
const [numero, setNumero] = useState("");    
const [nombre, setNombre] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveGestion = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/gestiones',{
            numero,
            nombre,
            estado
        });
        navigate("/gestiones/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveGestion}>
               <div className="field">
                    <label className='label'>Numero </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={numero} 
                            onChange = {(e) => setNumero(e.target.value)} 
                            placeholder='numero' />
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

export default AddGestion;