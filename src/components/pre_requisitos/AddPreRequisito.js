import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SERVER = 'http://localhost:5000';

const AddPreRequisito = () => {
const [id_materia_antiguas, setIdMateriaAntiguas] = useState("");
const [id_materia_presente, setIdMateriaPresente] = useState("");
const [estado, setEstado] = useState("1");

const [materiaAntigua, setMateriaAntigua] = useState([]);
const [materiaPrestente, setMateriaPresente] = useState([]);
const navigate = useNavigate();

const savePreRequisito = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/prerequisitos',{
            id_materia_antiguas,
            id_materia_presente,
            estado
        });
        navigate("/prerequisitos/")
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetch(`${SERVER}/materias`)
        .then((response) => response.json())
        .then((data) => {
            setMateriaAntigua(data);
        })
        .catch((err) => console.log(err));
    
    fetch(`${SERVER}/materias`)
        .then((response) => response.json())
        .then((data) => {
            setMateriaPresente(data);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={savePreRequisito}>
               <div className="field">
                    <label className='label'>id_materia_antiguas </label>
                    <div className="control">
                            <select
                                name='materiaantigua_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdMateriaAntiguas(e.target.value);
                                }}
                            >
                                {materiaAntigua.map(({ id, nombre }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {nombre}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id_materia_presente </label>
                    <div className="control">
                            <select
                                name='materiapresente_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdMateriaPresente(e.target.value);
                                }}
                            >
                                {materiaPrestente.map(({ id, nombre }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {nombre}
                                        </option>
                                    );
                                })}
                            </select>
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

export default AddPreRequisito;