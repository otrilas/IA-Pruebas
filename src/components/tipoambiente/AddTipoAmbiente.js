import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTipoAmbiente = () => {
const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");    
const [estado, setEstado] = useState("1");
const navigate = useNavigate();

const saveTipoAmbiente = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/tipoambientes',{

            nombre,
            descripcion,
            estado
        });
        navigate("/tipoambientes/")
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveTipoAmbiente}>
               <div className="field">
                    <label className='label'>nombre </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre} 
                            onChange = {(e) => setNombre(e.target.value)} 
                            placeholder='nombre' />
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

export default AddTipoAmbiente;