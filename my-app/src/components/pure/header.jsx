import React, { Fragment, useState } from "react";

import { Link,   Outlet } from "react-router-dom";
import { MenuGame } from "../../components/menuGames";

import { Footer } from "../../components/pure/footer";

export function Header() {

  return (
    <div>
      <header>
        <a href="/" className="logo">
          <h2>Dimi Games</h2>

          <h6>Never stop</h6>
        </a>

        <nav>
      
          <Link className="documentationsButton" to="/documentation">
            Documentation
          </Link>
          <a href="https://se.linkedin.com/in/diego-leonardo-vallejos-dimitroff-petcoff-687b0b1b8/en?original_referer=https%3A%2F%2Fwww.google.com%2F">
            About Me
          </a>
          <a href="https://diegodimitroffpetcoff.github.io/Porfolio/index.html">
            Keep in Touch!
          </a>
          <Link id="login" className="documentationsButton" to="/login">
            Login
          </Link>
          <Link id="signout" className="documentationsButton" to="/signout">
            Signout
          </Link>        
        </nav>
      </header>    
      <Outlet></Outlet> 
      <Footer></Footer>

    </div>
  );
}
