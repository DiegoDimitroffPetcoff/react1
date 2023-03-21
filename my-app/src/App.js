import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/pure/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Home></Home>
    </BrowserRouter>
  );
}

export default App;
