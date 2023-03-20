import React, { useState } from "react";




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

}



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

