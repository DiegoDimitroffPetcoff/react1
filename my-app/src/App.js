import "./App.css";
import { MenuGame } from "./components/menuGames";
import { Header } from "./components/pure/header";
import { Footer } from "./components/pure/footer";


function App() {
  return (
    <div>
      <Header></Header>
      <MenuGame></MenuGame>
      <Footer></Footer>
    </div>
  );
}

export default App;
