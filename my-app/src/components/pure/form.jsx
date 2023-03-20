import React, { useState } from "react";
import Axios from "axios";



export function Form() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

const  HandleInputChange =(event) =>{

setData({
 
    //con ..data hago una pseudo copia del objeto que se encuentra en state
    ...data,
    [event.target.name]:event.target.value,
   

})
}

const HandleFormChange =(event) => {
    event.preventDefault()
    console.log(data)


    Axios.post(`https://backendlogin.onrender.com/login`, {      
      username: data.name,
      password: data.password
    }).then(async (res) => {
     console.log(res);
    });
  };






  return (
    <div>
      {" "}
      <form  onClick={HandleFormChange}>
        <input placeholder="Name" type="text" name="name" onChange={HandleInputChange}></input>
        <input placeholder="Password" type="password" name="password"  onChange={HandleInputChange}></input>
        <button type="Submit" >Enviar</button>
      </form>
    </div>
  );
}

