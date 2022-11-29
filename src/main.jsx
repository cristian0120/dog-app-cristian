import React from "react"
import ReactDom from "react-dom/client";
import { Contador } from "./Contador";
import { DogApp } from "./DogApp";
import "./styles.css"

ReactDom.createRoot(document.getElementById("root")).render(
    //<React.StrictMode>
     
       <DogApp/>
   // </React.StrictMode>
)