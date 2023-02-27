
import React, { useState, useContext} from "react"
import  { Component1 } from "./component1"


const miContexto = React.createContext(null)

export function ComponentWithContext() {

    

    const [state, setState] = useState("primer estado")
const sessionData =  "contexto en session data" 
    return(
        <miContexto.Provider value={sessionData}>
        <div>
        <center>Estado del padre: {state}</center>
        <Component1></Component1>
        </div>
        </miContexto.Provider>

    )
    
}