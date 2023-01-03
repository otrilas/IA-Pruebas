import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditGestion = () => {
const [numero, setNumero] = useState("");
const [nombre, setNombre] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getGestionById();
},[]);

const updateGestion = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/gestiones/${id}`,{
            numero,
            nombre,
            estado
        });
        navigate("/gestiones/")
    } catch (error) {
        console.log(error);
    }
}

const getGestionById = async () => {
    const response = await axios.get(`http://localhost:5000/gestiones/${id}`);
    setNumero(response.data.numero);
    setNombre(response.data.nombre);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateGestion}>
               <div className="field">
                    <label className='label'>Numero </label>
                    <div className="control">
                        <input 
                            type="text" 
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
                            onChange = {(e) => setNombre(e.target.value)} placeholder='nombre' />
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

export default EditGestion;