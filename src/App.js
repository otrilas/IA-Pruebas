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
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
