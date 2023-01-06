import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:500';

const AddCronograma = () => {
const [id_programaciones, setIdProgramaciones] = useState("");
const [primer_parcial, setPrimerParcial] = useState("");
const [segundo_parcial, setSegundoParcial] = useState("");
const [examen_final, setExamenFinal] = useState("");

const [programacion, setProgramacion] = useEffect([]);
const navigate = useNavigate();

const saveCronograma = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/cronogramas',{
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

    useEffect(() => {
        fetch(`${SERVER}/programaciones`)
            .then((response) => response.json())
            .then((data) => {
                setProgramacion(data);
            })
            .catch((err) => console.log(err));
    }, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveCronograma}>
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
                    <label className='label'> segundo_parcial</label>
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
                    <button type='submit' className='button is-success'> Guardar</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default AddCronograma;