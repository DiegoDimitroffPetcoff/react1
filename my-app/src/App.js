import "./App.css";
import { Outlet ,Routes, Route } from "react-router-dom";

import Home from "./components/pure/home";
import {Form} from "./components/pure/form";
import {Signout} from "./components/pure/signout";
import {Documentation} from "./components/pure/documentation";
import { MenuGame } from "./components/menuGames";

import { Footer } from "./components/pure/footer";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}>          
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<MenuGame />} />       
          <Route path="/signout" element={<Signout />} />
          <Route path="/documentation" element={<Documentation />} />   
      
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
