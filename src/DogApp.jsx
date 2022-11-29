import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Perros from "./components/Perros";

export const DogApp = ({ title = "App Dogs" }) => {
  const [perros, setPerro] = useState({});
  const initialUrl = "https://dog.ceo/api/breeds/image/random";

  const fetchDogs = (url) => {
    console.log("se esta llamando fetch dog")
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPerro(data.message);
        console.log({ data });
      })
      .catch((error) => console.log(error));
  };
  const onNew = () =>{
    fetchDogs(initialUrl)
  }

  useEffect(() => {
    fetchDogs(initialUrl);
  }, []);
  console.log({perros});
  return (
    <>
      <h1>{title}</h1>

       <Button onNew={onNew}/>
      <Perros dog={perros} />
    </>
  );
};
