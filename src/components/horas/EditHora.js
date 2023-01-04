import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditHora = () => {

const [fecha_inicio, setFechaInicio] = useState("");
const [fecha_fin, setFechaFin] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getHoraById();
},[]);

const updateHora = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/horas/${id}`,{
            fecha_inicio,
            fecha_fin,
            estado
        });
        navigate("/horas/")
    } catch (error) {
        console.log(error);
    }
}

const getHoraById = async () => {
    const response = await axios.get(`http://localhost:5000/horas/${id}`);
    setFechaInicio(response.data.fecha_inicio);
    setFechaFin(response.data.fecha_fin);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateHora}>
               <div className="field">
                    <label className='label'>fecha inicio </label>
                    <div className="control">
                        <input 
                            type="time" 
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
                            type="time" 
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
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditHora;