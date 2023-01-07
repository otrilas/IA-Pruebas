import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
const SERVER = 'http://localhost:5000';

const EditEstudiante = () => {
const [id_persona, setIdPersona] = useState("");
const [cu, setCU] = useState("");
const [estado, setEstado] = useState("1");

const [personas, setPersonas] = useState([]);
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getEstudianteById();
},[]);

const updateEstudiante = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/estudiantes/${id}`,{
            id_persona,
            cu,
            estado
        });
        navigate("/estudiantes/")
    } catch (error) {
        console.log(error);
    }
}

const getEstudianteById = async () => {
    const response = await axios.get(`http://localhost:5000/estudiantes/${id}`);
    setIdPersona(response.data.id_persona);
    setCU(response.data.cu);
    setEstado(response.data.estado);
}

useEffect(() => {
    fetch(`${SERVER}/personas`)
        .then((response) => response.json())
        .then((data) => {
            setPersonas(data);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateEstudiante}>
               <div className="field">
                    <label className='label'>Id Persona </label>
                    <div className="control">
                             <select
                                name='persona_id'
                                id=''
                                className='input'
                                onChange={(e) => {
                                    setIdPersona(e.target.value);
                                }}
                            >
                                {personas.map(({ id, nombre }) => {
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
                    <label className='label'>C U </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={cu} 
                            onChange = {(e) => setCU(e.target.value)} 
                            placeholder='C U' />
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

export default EditEstudiante;