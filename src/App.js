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

import AmbienteList from "./components/ambientes/AmbienteList";
import AddAmbiente from "./components/ambientes/AddAmbiente";
import EditAmbiente from "./components/ambientes/EditAmbiente";

import AsignacionList from "./components/asignaciones/AsignacionList";
import AddAsignacion from "./components/asignaciones/AddAsignacion";
import EditAsignacion from "./components/asignaciones/EditAsignacion";

import AddCronograma from "./components/cronogramas/AddCronograma";
import CronogramaList from  "./components/cronogramas/CronogramaList";
import EditCronograma from "./components/cronogramas/EditCronograma"

import DocenteList from "./components/docentes/DocenteList";
import AddDocente from "./components/docentes/AddDocente";
import EditDocente from "./components/docentes/EditDocente";

import HorarioList from "./components/horarios/HorarioList";
import AddHorario from "./components/horarios/AddHorario"
import EditHorario from "./components/horarios/EditHorario";

import MateriaList from "./components/materias/MateriaList";
import AddMateria from "./components/materias/AddMateria";
import EditMateria from "./components/materias/EditMateria";

import PreRequisitoList from "./components/pre_requisitos/PreRequisitoList";
import AddPreRequisito from "./components/pre_requisitos/AddPreRequisito";
import EditPreRequisito from "./components/pre_requisitos/EditPreRequisito";

import ProgramacionList from "./components/programaciones/ProgramacionList";
import AddProgramacion from "./components/programaciones/AddProgramacion";
import EditProgramacion from "./components/programaciones/EditProgramacion";

import EstudianteList from "./components/estudiantes/EstudianteList";
import AddEstudiante from "./components/estudiantes/AddEstudiante";
import EditEstudiante from "./components/estudiantes/EditEstudiante";

function App() { 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Navbar />} /> */}
        <Route path="/ambientes/" element = {<AmbienteList/>} />
        <Route path="/ambientes/add" element = {<AddAmbiente/>} />
        <Route path="/ambientes/edit/:id" element = {<EditAmbiente/>} />

        <Route path="/areas/" element = {<AreaList/>} />
        <Route path="/areas/add" element = {<AddArea/>} />
        <Route path="/areas/edit/:id" element = {<EditArea/>} />

        <Route path="/asignaciones/" element = {<AsignacionList/>} />
        <Route path="/asignaciones/add" element = {<AddAsignacion/>} />
        <Route path="/asignaciones/edit/:id" element = {<EditAsignacion/>} />

        <Route path="/carreras/" element = {<CarreraList/>} />
        <Route path="/carreras/edit/:id" element = {<EditCarrera/>} />
        <Route path="/carreras/add" element = {<AddCarrera/>} />

        <Route path="/cronogramas/" element = {<CronogramaList/>} />
        <Route path="/cronogramas/edit/:id" element = {<EditCronograma/>} />
        <Route path="/cronogramas/add" element = {<AddCronograma/>} />

        <Route path="/dias/" element = {<DiaList/>} />
        <Route path="/dias/edit/:id" element = {<EditDia/>} />
        <Route path="/dias/add" element = {<AddDia/>} />

        <Route path="/docentes/" element = {<DocenteList/>} />
        <Route path="/docentes/edit/:id" element = {<EditDocente/>} />
        <Route path="/docentes/add" element = {<AddDocente/>} />

        <Route path="/edificios/" element = {<EdificioList/>} />
        <Route path="/edificios/edit/:id" element = {<EditEdificio/>} />
        <Route path="/edificios/add" element = {<AddEdificio/>} />

        <Route path="/estudiantes/" element = {<EstudianteList/>} />
        <Route path="/estudiantes/edit/:id" element = {<EditEstudiante/>} />
        <Route path="/estudiantes/add" element = {<AddEstudiante/>} />

        <Route path="/facultades/" element = {<FacultadList/>} />
        <Route path="/facultades/edit/:id" element = {<EditFacultad/>} />
        <Route path="/facultades/add" element = {<AddFacultad/>} />

        <Route path="/gestiones/" element = {<GestionList/>} />
        <Route path="/gestiones/edit/:id" element = {<EditGestion/>} />
        <Route path="/gestiones/add" element = {<AddGestion/>} />

        <Route path="/horarios/" element = {<HorarioList/>} />
        <Route path="/horarios/edit/:id" element = {<EditHorario/>} />
        <Route path="/horarios/add" element = {<AddHorario/>} />        

        <Route path="/horas/" element = {<HoraList/>} />
        <Route path="/horas/edit/:id" element = {<EditHora/>} />
        <Route path="/horas/add" element = {<AddHora/>} />

        <Route path="/materias/" element = {<MateriaList/>} />
        <Route path="/materias/edit/:id" element = {<EditMateria/>} />
        <Route path="/materias/add" element = {<AddMateria/>} />

        <Route path="/personas/" element = {<PersonaList/>} />
        <Route path="/personas/edit/:id" element = {<EditPersona/>} />
        <Route path="/personas/add" element = {<AddPersona/>} />

        <Route path="/pisos/" element = {<PisoList/>} />
        <Route path="/pisos/edit/:id" element = {<EditPiso/>} />
        <Route path="/pisos/add" element = {<AddPiso/>} />

        <Route path="/prerequisitos/" element = {<PreRequisitoList/>} />
        <Route path="/prerequisitos/edit/:id" element = {<EditPreRequisito/>} />
        <Route path="/prerequisitos/add" element = {<AddPreRequisito/>} />

        <Route path="/programaciones/" element = {<ProgramacionList/>} />
        <Route path="/programaciones/edit/:id" element = {<EditProgramacion/>} />
        <Route path="/programaciones/add" element = {<AddProgramacion/>} />

        <Route path="/tipoambientes/" element = {<TipoAmbienteList/>} />
        <Route path="/tipoambientes/edit/:id" element = {<EditTipoAmbiente/>} />
        <Route path="/tipoambientes/add" element = {<AddTipoAmbiente/>} />
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
