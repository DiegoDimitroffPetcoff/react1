import { useState } from "react";
import { ExcuseGame } from "./excuse";
import { AgeGame } from "./age";

export function MenuGame() {
  const changeExcuseGameState = () => {
    {
      SetmainMenu((element = <ExcuseGame></ExcuseGame>));
    }
  };

  let element1 = (
    <button class="button-6" onClick={changeExcuseGameState}>
      Don't You Wanna go?!!
    </button>
  );

  const [gamesMenuStatus, SetgamesMenu] = useState(element1);

  let element = (
    <div class="mean">
      <div class="menu">
        <div class="GamesList">All the games!</div>
        {gamesMenuStatus}
        <p>
          I hope you can enjoy this app! I wonna try to add soom others games!
        </p>
      </div>
    </div>
  );

  const [mainMenu, SetmainMenu] = useState(element);

  return <div class="mean">{mainMenu}</div>;
}

/** 
    let element1 = (
        <div class="mean">
            <div class="menu">
            <div class="GamesList">All the games!</div>
            <button class="button-6" onClick={changeExcuseGameState}>Don't You Wanna go?!!</button>
         <p>I hope you can enjoy this app! I wonna try to add soom others games!</p>
            </div>
        </div>
    );
    */
