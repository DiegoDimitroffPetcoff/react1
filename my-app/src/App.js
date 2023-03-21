import "./App.css";
import { Outlet ,Routes, Route } from "react-router-dom";

import Home from "./components/pure/home";

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
