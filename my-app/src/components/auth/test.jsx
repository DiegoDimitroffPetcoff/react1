import React from "react";
import axios from "axios";


export  function Test() {
console.log("si");

  axios.get('https://backendlogin.onrender.com/test')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}
