
import { MenuGame } from "../../components/menuGames";
import { Header } from "../../components/pure/header";
import { Footer } from "../../components/pure/footer";
import { Outlet } from "react-router-dom";


export function Home() {
  return (
    <div>  
      <Header></Header>
      <MenuGame></MenuGame>
      <Footer></Footer>
      <Outlet/>
    </div>
  );
}

export default Home;
