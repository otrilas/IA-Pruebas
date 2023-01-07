import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
const SERVER = 'http://localhost:5000';

const EditPiso = () => {
const [id_edificio, setIdEdificio] = useState("");    
const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");
const [estado, setEstado] = useState("1");

const [edificios, setEdificios] = useState([]);
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getPisoById();
},[]);

const updatePiso = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/pisos/${id}`,{
            id_edificio,
            nombre,
            descripcion,
            estado
        });
        navigate("/pisos/")
    } catch (error) {
        console.log(error);
    }
}

const getPisoById = async () => {
    const response = await axios.get(`http://localhost:5000/pisos/${id}`);
    setIdEdificio(response.data.id_edificio);
    setNombre(response.data.nombre);
    setDescripcion(response.data.descripcion);
    setEstado(response.data.estado);
}
useEffect(() => {
    fetch(`${SERVER}/edificios`)
        .then((response) => response.json())
        .then((data) => {
            setEdificios(data);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updatePiso}>
               <div className="field">
                    <label className='label'>id edificio </label>
                    <div className="control">
                            <select
                                name='edificio_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdEdificio(e.target.value);
                                }}
                            >
                                {edificios.map(({ id, nombre }) => {
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
                    <label className='label'>Descripcion </label>
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
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditPiso;