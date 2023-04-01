import React from "react";

export function LoginSuccess() {
  //recibo del Session Storage la info de user
  let user = sessionStorage.getItem("user");
  let userp = JSON.parse(user);

  return (
    <div>
      <h1>El logeo ha sido exitoso</h1>
      Bienvenido {userp.data.firstName}!
    </div>
  );
}

export default LoginSuccess;
