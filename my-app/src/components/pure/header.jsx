import React, { Fragment, useState } from "react";




export function Header() {
  const [documentation, setDocumentation] = useState();
  const [login, setLogin] = useState();


  function showDocumentation() {
    const info = (
      <>
        <h5 className="documentation">
          Project created with REACT JS. It currently has a main screen with
          three buttons. The first of them is a game which is currently showing
          information from an array incorporated into the project itself. In the
          future, an API will be created in order to be able to obtain them from
          a database. The second game, called "the age of your soul", was made
          with the purpose of practicing requests through the axios library to
          an external API, which returns a certain number to which each name is
          assigned. The third button gives the functionality to leave messages
          on a panel. They are generated and temporarily persisted in an API
          that I have created with NEST JS and which is deployed at ramdon.com.
          This is a free host and therefore reading the messages may take a
          while. The information persists for a certain time, but not always
          since the host that maintains it deployed is not active all the
          time... if not, it is activated before the requests, taking a few
          seconds before the first request and obtaining normal operation
          subsequently. <br></br>
          <button class="button-6" onClick={closeInfo}>
            Close
          </button>
        </h5>
      </>
    );
    setDocumentation(info);
    function closeInfo() {
      setDocumentation();
    }
  }


  function loginFunction() {
    
    //let mainText = document.getElementsByClassName("mean");
    let loginTemplate = (<form >

<div>
  
    <input type="text" id="nomeid" placeholder="Tiago Vale" required="required" name="nome" />
  
    <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
  
    <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />

  

    </div>
    <div>
    <input type="submit" class="enviar" onclick={Enviar} value="Enviar" />
    </div>
    </form>)

  setLogin(loginTemplate)
 //   mainText[0].innerHTML = loginTemplate;


  
  }

  function Enviar(params) {
    console.log("funciona");
  }

  return (
    <div>

      {" "}
      <header>
        <a href="*" class="logo">
          <h2>Dimi Games</h2>

          <h6>Never stop</h6>
        </a>

        <nav>
          {documentation}
          <button className="documentationsButton" onChange={showDocumentation}>
            Documentation
          </button>

          <a href="https://se.linkedin.com/in/diego-leonardo-vallejos-dimitroff-petcoff-687b0b1b8/en?original_referer=https%3A%2F%2Fwww.google.com%2F">
            About Me
          </a>
          <a href="https://diegodimitroffpetcoff.github.io/Porfolio/index.html">
            Keep in Touch!
          </a>
          <button
            id="login"
            className="documentationsButton"
            onClick={loginFunction}
          >
            Login
          </button>
          {login}
          <button
            id="signout"
            className="documentationsButton"
            onClick={showDocumentation}
          >
            Sing out!
          </button>

        </nav>
      </header>
    
    </div>
  );
}
