import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pure/home";
import {Form} from "./components/pure/form";
import {Signout} from "./components/pure/signout";
import {Documentation} from "./components/pure/documentation";
import { MenuGame } from "./components/menuGames";
import { LoginSuccess } from "./components/auth/Login success";



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}>          
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<MenuGame />} />       
          <Route path="/signout" element={<Signout />} />
          <Route path="/documentation" element={<Documentation />} />   
          <Route path="/login/logged" element={<Documentation />} /> 
      
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
