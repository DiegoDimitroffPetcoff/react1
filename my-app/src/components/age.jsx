/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import Axios from "axios";

export function AgeGame() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
   let name = res.data.name 
   let age = res.data.age
let Text = <h1 class="ageMessage">Ey {name} your soul age is {age}!!</h1>

      setAge(Text);
    });
  };

  return (
    <div class="mainHowOld">
    <p>Hello! This is a simple game where you just have to write your name and we will tell you how old your soul is!</p>
      <input
        placeholder="Ex. Pedro.."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br></br>

    
      <button class="button-85" role="button" onClick={fetchData}>Check it!</button>

      <h1 class="ageMessage">{age}</h1>
    </div>
  );
}
