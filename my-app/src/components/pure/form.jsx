import React, { useState } from "react";
import axios from "axios";




export function Form() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
const [log, setLog]= useState()
const  HandleInputChange =(event) =>{

setData({
 
    //con ..data hago una pseudo copia del objeto que se encuentra en state
    ...data,
    [event.target.name]:event.target.value,
   

})
}

const HandleFormChange =async (event) => {
    event.preventDefault()

try {
  await axios.post(`https://backendlogin.onrender.com/login`, {      
    username: data.name,
    password: data.password
  }).then(function (response) {
    console.log(response.data);
    setLog(response.data)
  })

} catch (error) {
  console.log("SE PRODUJO UN ERROR")
  console.log(error)
}

  };






  return (
    <div>
      {" "}
      <form  onClick={HandleFormChange}>
        <input placeholder="Name" type="text" name="name" onChange={HandleInputChange}></input>
        <input placeholder="Password" type="password" name="password"  onChange={HandleInputChange}></input>
        <button type="Submit" >Enviar</button>
      </form>
      {log}
    </div>
  );
}

