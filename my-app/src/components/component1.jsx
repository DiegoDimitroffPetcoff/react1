import {useContext} from "react"


export function Component1(sessionData) {

    const state =useContext(sessionData)
    console.log(state)

    return(
        <div>
        
            LOGIN CORRETO
            {state}
        </div>
    )
    
}