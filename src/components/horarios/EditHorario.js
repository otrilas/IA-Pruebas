import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
const SERVER = 'http://localhost:5000';

const EditHorario = () => {
const [id_dia, setIdDia] = useState("");
const [id_hora, setidHora] = useState("");
const [id_ambiente, setIdAmbiente] = useState("");
const [estado, setEstado] = useState("1");

const [dias, setDias] = useState([]);
const [horas, setHoras] = useState([]);
const [ambientes, setAmbientes] = useState([]);
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
useEffect(() => {
    fetch(`${SERVER}/dias`)
        .then((response) => response.json())
        .then((data) => {
            setDias(data);
        })
        .catch((err) => console.log(err));

    fetch(`${SERVER}/horas`)
        .then((response) => response.json())
        .then((data) => {
            setHoras(data);
        })
        .catch((err) => console.log(err));

    fetch(`${SERVER}/ambientes`)
        .then((response) => response.json())
        .then((data) => {
            setAmbientes(data);
        })
        .catch((err) => console.log(err));
}, []);


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateHorario}>
            <div className="field">
                    <label className='label'>Id Dia </label>
                    <div className="control">
                            <select
                                name='dia_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdDia(e.target.value);
                                }}
                            >
                                {dias.map(({ id, nombre }) => {
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
                    <label className='label'>id Hora </label>
                    <div className="control">
                            <select
                                name='hora_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setidHora(e.target.value);
                                }}
                            >
                                {horas.map(({ id, hora_inicio, hora_fin }) => {
                                    return (
                                        <option key={id} value={id}>
                                            {hora_inicio + ' a ' + hora_fin}
                                        </option>
                                    );
                                })}
                            </select>
                    </div>
               </div>
               <div className="field">
                    <label className='label'>id Ambiente </label>
                    <div className="control">
                            <select
                                name='ambiente_id'
                                id=''
                                // disabled='disabled'
                                className='input'
                                onChange={(e) => {
                                    setIdAmbiente(e.target.value);
                                }}
                            >
                                {ambientes.map(({ id, nombre }) => {
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
                    <button type='submit' className='button is-success'> UPDATE</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default EditHorario;