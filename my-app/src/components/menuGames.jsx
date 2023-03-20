/* eslint-disable no-lone-blocks */
import { useState } from "react";
import { ExcuseGame } from "./excuse";
import { AgeGame } from "./age";
import { Comments } from "./comments";
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

  const changeComments = () => {
    {
      alert(
        "You Will be able to leave your comment on this page. Using the API tha I build with Nest Js."
      );
      SetmainMenu((element = <Comments></Comments>));
    }
  };

  let element1 = (
    <button className="button-6" onClick={changeExcuseGameState}>
      Don't You Wanna go?!!
    </button>
  );

  let element2 = (
    <button className="button-6" onClick={changeHowOldIsYourSould}>
      How Old is your sould?
    </button>
  );

  let element3 = (
    <button className="button-6" onClick={changeComments}>
      Leave a Comment!
    </button>
  );

  let element = (
    <div className="mean">
      <div className="menu">
        <div className="GamesList">All the games!</div>
        {element1}
        {element2}
        {element3}
        <p>
          I hope you can enjoy this app! I wonna try to add soom others games!
        </p>
      </div>
    </div>
  );

   const [mainMenu, SetmainMenu] = useState(element);
  
  return <div className="mean">{mainMenu}</div>;
}
