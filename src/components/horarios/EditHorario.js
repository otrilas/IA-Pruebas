import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditHorario = () => {
const [id_dia, setIdDia] = useState("");
const [id_hora, setidHora] = useState("");
const [id_ambiente, setIdAmbiente] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getHorarioById();
},[]);

const updateHorario = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/horarios/${id}`,{
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

const getHorarioById = async () => {
    const response = await axios.get(`http://localhost:5000/horarios/${id}`);
    setIdDia(response.data.id_dia);
    setidHora(response.data.id_hora);
    setIdAmbiente(response.data.id_ambiente);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateHorario}>
            <div className="field">
                    <label className='label'>Id Dia </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_dia} 
                            onChange = {(e) => setIdDia(e.target.value)} 
                            placeholder='Dia' />
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
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditHorario;