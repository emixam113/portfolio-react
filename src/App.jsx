import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Presentation from "./pages/Présentation";
import Home from "./components/Home";
import Projets from "./pages/projets"
import Contact from "./pages/Contact"


function App(){
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/projets" element={<Projets/>}></Route>
        <Route path = "/contact" element={<Contact/>}></Route>
        <Route path = "/presentation" element={<Presentation/>}></Route>
      </Routes>
    </div>
  )
}

export default App
