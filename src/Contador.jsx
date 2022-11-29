import { useState } from "react"
const title= "CONTADOR"
export const Contador =() =>{
const [counter, setCounter] = useState(10)
    const numAdd=()=>{
setCounter(counter+1)

    }
    return (
        <>
        <h1>{title}</h1>
        <button onClick={numAdd} className="buttonContador">Contador</button>
        <h2 >{counter}</h2>
        </>
    )
}