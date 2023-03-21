import React from "react";


export function Documentation() {

  return (

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
          <button className="button-6" >
            Close
          </button>
        </h5>

      
    
  );
}

