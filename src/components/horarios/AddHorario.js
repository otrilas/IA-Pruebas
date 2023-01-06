import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddHorario = () => {
const [id_dia, setIdDia] = useState("");
const [id_hora, setidHora] = useState("");
const [id_ambiente, setIdAmbiente] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveHorario = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/horarios',{
            id_dia,
            id_hora,
            id_ambiente,
            estado
        });
        navigate("/horarios/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveHorario}>
            <div className="field">
                    <label className='label'>Id Dia </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_dia} 
                            onChange = {(e) => setIdDia(e.target.value)} 
                            placeholder='dia' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Hora </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_hora} 
                            onChange = {(e) => setidHora(e.target.value)} 
                            placeholder='Hora' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Ambiente </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_ambiente} 
                            onChange = {(e) => setIdAmbiente(e.target.value)} 
                            placeholder='Ambiente' />
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

export default AddHorario;