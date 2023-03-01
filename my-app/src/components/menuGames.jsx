/* eslint-disable no-lone-blocks */
import { useState } from "react";
import { ExcuseGame } from "./excuse";
import { AgeGame } from "./age";

export function MenuGame() {
  const changeExcuseGameState = () => {
    {
      SetmainMenu((element = <ExcuseGame></ExcuseGame>));
    }
  };

  const changeHowOldIsYourSould = () => {
    {
      SetmainMenu((element = <AgeGame></AgeGame>));
    }
  };

  let element1 = (
    <button class="button-6" onClick={changeExcuseGameState}>
      Don't You Wanna go?!!
    </button>
  );

  let element2 = (
    <button class="button-6" onClick={changeHowOldIsYourSould}>
      How Old is your sould?
    </button>
  );

  let element = (
    <div class="mean">
      <div class="menu">
        <div class="GamesList">All the games!</div>
        {element1}
        {element2}
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
