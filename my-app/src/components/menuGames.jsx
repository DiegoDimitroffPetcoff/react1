import { useState } from "react";
import { ExcuseGame } from "./excuse";
import { AgeGame } from "./age";

export function MenuGame() {

    const changeExcuseGameState = () => {
        { SetgamesMenu(element = <ExcuseGame></ExcuseGame>) }
    }

    const changeAgeGameState = () => {
        { SetgamesMenu(
            <div>
                Este juego estara pronto dispò
            </div>

        )}
    }


    

   

    let element = (
        <div class="mean">
            <div class="menu">
            <div class="GamesList">Lista de Juegos</div>
            <button class="button-6" onClick={changeExcuseGameState}>Don't You Wanna go?!!</button>
         <p>I hope you can enjoy this app! I wonna try to add soom others games!</p>
            </div>
        </div>
    );




    const [gamesMenuStatus, SetgamesMenu] = useState(element)
   



    return (
        <div class="mean">
            {gamesMenuStatus}
        </div>
    )


}