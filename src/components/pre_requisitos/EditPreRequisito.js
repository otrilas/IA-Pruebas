import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditPreRequisito = () => {
const [id_materia_antiguas, setIdMateriaAntiguas] = useState("");
const [id_materia_presente, setIdMateriaPresente] = useState("");
const [estado, setEstado] = useState("1");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getPreRequisitoById();
},[]);

const updatePreRequisito = async(e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/prerequisitos/${id}`,{
            id_materia_antiguas,
            id_materia_presente,
            estado
        });
        navigate("/prerequisitos/")
    } catch (error) {
        console.log(error);
    }
}

const getPreRequisitoById = async () => {
    const response = await axios.get(`http://localhost:5000/prerequisitos/${id}`);
    setIdMateriaAntiguas(response.data.id_materia_antiguas);
    setIdMateriaPresente(response.data.id_materia_presente);
    setEstado(response.data.estado);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updatePreRequisito}>
               <div className="field">
                    <label className='label'>id_materia_antiguas </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_materia_antiguas} 
                            onChange = {(e) => setIdMateriaAntiguas(e.target.value)} 
                            placeholder='id_materia_antiguas' />
                    </div>
               </div>

               <div className="field">
                    <label className='label'>id_materia_presente </label>
                    <div className="control">
                        <input 
                            type="number" 
                            className='input' 
                            value={id_materia_presente} 
                            onChange = {(e) => setIdMateriaPresente(e.target.value)} placeholder='id_materia_presente' />
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

export default EditPreRequisito;