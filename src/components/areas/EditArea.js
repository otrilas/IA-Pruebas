import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditArea = () => {
const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getAreaById();
},[]);

const updateArea = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/areas/${id}`,{
            nombre,
            descripcion,
            estado
        });
        navigate("/areas/")
    } catch (error) {
        console.log(error);
    }
}

const getAreaById = async () => {
    const response = await axios.get(`http://localhost:5000/areas/${id}`);
    setNombre(response.data.nombre);
    setDescripcion(response.data.descripcion);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateArea}>
               <div className="field">
                    <label className='label'>Nombre </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={nombre} 
                            onChange = {(e) => setNombre(e.target.value)} 
                            placeholder='Nombre' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>Descripcion </label>
                    <div className="control">
                        <input 
                            type="text" 
                            className='input' 
                            value={descripcion} 
                            onChange = {(e) => setDescripcion(e.target.value)} placeholder='Descripcion' />
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

export default EditArea;