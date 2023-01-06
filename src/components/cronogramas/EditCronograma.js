import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditAmbiente = () => {
const [id_programaciones, setIdProgramaciones] = useState("");
const [primer_parcial, setPrimerParcial] = useState("");
const [segundo_parcial, setSegundoParcial] = useState("");
const [examen_final, setExamenFinal] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getCronogramaById();
},[]);

const updateCronograma = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/cronogramas/${id}`,{
            id_programaciones,
            primer_parcial,
            segundo_parcial,
            examen_final
        });
        navigate("/cronogramas/")
    } catch (error) {
        console.log(error);
    }
}

const getCronogramaById = async () => {
    const response = await axios.get(`http://localhost:5000/cronogramas/${id}`);
    setIdProgramaciones(response.data.id_programaciones);
    setPrimerParcial(response.data.primer_parcial);
    setSegundoParcial(response.data.segundo_parcial);
    setExamenFinal(response.data.examen_final);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateAsignacion}>
            <div className="field">
                    <label className='label'>Id programaciones </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_programaciones} 
                            onChange = {(e) => setIdProgramaciones(e.target.value)} 
                            placeholder='programaciones' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>primer_parcial </label>
                    <div className="control">
                        <input 
                            type="date" 
                            className='input' 
                            value={primer_parcial} 
                            onChange = {(e) => setPrimerParcial(e.target.value)} 
                            placeholder='primer_parcial' />
                    </div>
               </div>
               <div className="field">
                    <label className='label'>segundo_parcial</label>
                    <div className="control">
                        <input 
                            type="date" 
                            className='input' 
                            value={segundo_parcial} 
                            onChange = {(e) => setSegundoParcial(e.target.value)} 
                            placeholder='segundo_parcial' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>examen_final </label>
                    <div className="control">
                        <input 
                            type="date" 
                            className='input' 
                            value={examen_final} 
                            onChange = {(e) => setExamenFinal(e.target.value)} placeholder='examen_final' />
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

export default EditAmbiente;