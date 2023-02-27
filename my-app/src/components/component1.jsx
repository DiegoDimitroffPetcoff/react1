import {useContext, useState} from "react"


export function Component1(sessionData) {

    const state =useContext(sessionData)
    console.log(state)

    return(
        <div>
        
            desde el component1 
            {state}
        </div>
    )
    
}