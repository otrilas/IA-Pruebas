import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddHora = () => {
const [fecha_inicio, setFechaInicio] = useState("");    
const [fecha_fin, setFechaFin] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveHora = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/horas',{
            fecha_inicio,
            fecha_fin,
            estado
        });
        navigate("/horas/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveHora}>
               <div className="field">
                    <label className='label'>fecha inicio </label>
                    <div className="control">
                        <input 
                            type="TIME" 
                            className='input' 
                            value={fecha_inicio} 
                            onChange = {(e) => setFechaInicio(e.target.value)} 
                            placeholder='fecha inicio' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>fecha fin </label>
                    <div className="control">
                        <input 
                            type="TIME" 
                            className='input' 
                            value={fecha_fin} 
                            onChange = {(e) => setFechaFin(e.target.value)} placeholder='fecha fin' />
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

export default AddHora;