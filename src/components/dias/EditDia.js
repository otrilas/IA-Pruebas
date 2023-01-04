import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditDia = () => {
const [codigo, setCodigo] = useState("");
const [nombre, setNombre] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getDiaById();
},[]);

const updateDia = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/dias/${id}`,{
            codigo,
            nombre,
            estado
        });
        navigate("/dias/")
    } catch (error) {
        console.log(error);
    }
}

const getDiaById = async () => {
    const response = await axios.get(`http://localhost:5000/dias/${id}`);
    setCodigo(response.data.codigo);
    setNombre(response.data.nombre);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateDia}>
               <div className="field">
                    <label className='label'>Codigo </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={codigo} 
                            onChange = {(e) => setCodigo(e.target.value)} 
                            placeholder='codigo' />
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

export default EditDia;