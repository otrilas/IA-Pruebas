import {BrowserRouter, Routes, Route} from "react-router-dom";
import AreaList from "./components/areas/AreaList";
import AddArea from "./components/areas/AddArea";
import EditArea from "./components/areas/EditArea";
import GestionList from "./components/gestiones/GestionList";
import EditGestion from "./components/gestiones/EditGestion";
import AddGestion from "./components/gestiones/AddGestion";
import Navbar from "./components/Navbar";
import AddEdificio from "./components/edificios/AddEdificio";
import EdificioList from "./components/edificios/EdificioList";
import EditEdificio from "./components/edificios/EditEdificio";
import FacultadList from "./components/facultades/FacultadList";
import EditFacultad from "./components/facultades/EditFacultad";
import AddFacultad from "./components/facultades/AddFacultad";
import AddPiso from "./components/pisos/AddPiso";
import EditPiso from "./components/pisos/EditPiso";
import PisoList from "./components/pisos/PisoList";
import TipoAmbienteList from "./components/tipoambiente/TipoAmbienteList";
import EditTipoAmbiente from "./components/tipoambiente/EditTipoAmbiente";
import AddTipoAmbiente from "./components/tipoambiente/AddTipoAmbiente";
import HoraList from "./components/horas/HoraList";
import EditHora from "./components/horas/EditHora";
import AddHora from "./components/horas/AddHora";
import DiaList from "./components/dias/DiaList";
import EditDia from "./components/dias/EditDia";
import AddDia from "./components/dias/AddDia";
import PersonaList from "./components/Personas/PersonaList";
import EditPersona from "./components/Personas/EditPersona";
import AddPersona from "./components/Personas/AddPersona";
import CarreraList from "./components/carreras/CarreraList";
import EditCarrera from "./components/carreras/EditCarrera";
import AddCarrera from "./components/carreras/AddCarrera";

function App() {
   
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element = {<Navbar/>} />
        <Route path="/areas/" element = {<AreaList/>} />
        <Route path="/areas/add" element = {<AddArea/>} />
        <Route path="/areas/edit/:id" element = {<EditArea/>} />
        <Route path="/gestiones/" element = {<GestionList/>} />
        <Route path="/gestiones/edit/:id" element = {<EditGestion/>} />
        <Route path="/gestiones/add" element = {<AddGestion/>} />
        <Route path="/edificios/" element = {<EdificioList/>} />
        <Route path="/edificios/edit/:id" element = {<EditEdificio/>} />
        <Route path="/edificios/add" element = {<AddEdificio/>} />
        <Route path="/facultades/" element = {<FacultadList/>} />
        <Route path="/facultades/edit/:id" element = {<EditFacultad/>} />
        <Route path="/facultades/add" element = {<AddFacultad/>} />
        <Route path="/pisos/" element = {<PisoList/>} />
        <Route path="/pisos/edit/:id" element = {<EditPiso/>} />
        <Route path="/pisos/add" element = {<AddPiso/>} />
        <Route path="/tipoambientes/" element = {<TipoAmbienteList/>} />
        <Route path="/tipoambientes/edit/:id" element = {<EditTipoAmbiente/>} />
        <Route path="/tipoambientes/add" element = {<AddTipoAmbiente/>} />
        <Route path="/horas/" element = {<HoraList/>} />
        <Route path="/horas/edit/:id" element = {<EditHora/>} />
        <Route path="/horas/add" element = {<AddHora/>} />
        <Route path="/dias/" element = {<DiaList/>} />
        <Route path="/dias/edit/:id" element = {<EditDia/>} />
        <Route path="/dias/add" element = {<AddDia/>} />
        <Route path="/personas/" element = {<PersonaList/>} />
        <Route path="/personas/edit/:id" element = {<EditPersona/>} />
        <Route path="/personas/add" element = {<AddPersona/>} />
        <Route path="/carreras/" element = {<CarreraList/>} />
        <Route path="/carreras/edit/:id" element = {<EditCarrera/>} />
        <Route path="/carreras/add" element = {<AddCarrera/>} />

      </Routes>        
    </BrowserRouter>
  );
}

export default App;
