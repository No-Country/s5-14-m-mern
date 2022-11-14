import { useState } from "react";
import Boton from "../../components/GamesComponents/AdivinaPalabraComponents/Botones/Boton";
import BotonJugar from "../../components/GamesComponents/AdivinaPalabraComponents/BotonJugar/BotonJugar";
import Imagen from "../../components/GamesComponents/AdivinaPalabraComponents/Imagen/Imagen";

import "../AdivinaPalabra/adivinaPalabra.sass";

const AdivinaPalabra = () => {
  let palabraAdivinar;

  const letras = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
  ];
  const palabrasArray = [
    "manzana",
    "trueno",
    "etiqueta",
    "zafiro",
    "afuera",
    "rodar",
    "hueso",
    "pulpo",
    "arrestar",
    "tortilla",
    "semana",
    "sofocar",
    "horrible",
    "sombrero",
    "beisbol",
    "europa",
    "alrededor",
    "cianuro",
    "fiscal",
    "circo",
    "apresar",
    "eludir",
    "sonambulo",
    "proyecto",
    "diario",
    "lubricante",
    "examen",
    "contagioso",
    "alfajor",
    "humor",
    "abejas",
    "pulsera",
    "venda",
    "ocupar",
    "golosinas",
    "roca",
    "desperdiciar",
    "robo",
    "corta"
  ];

  // eslint-disable-next-line no-unused-vars
  const [src, setSrc] = useState(0);
  const [palabra, setPalabra] = useState();

  function empezarJuego() {
    const numRandom = random();
    const palab = palabrasArray[numRandom];
    palabraAdivinar = palab;
    setPalabra(palabraAdivinar);

    const contenedor = document.getElementById("contenedor-palabra");

    for (let i = 0; i < palabraAdivinar.length; i++) {
      const span = document.createElement("span");
      contenedor.appendChild(span);
    }
  }

  console.log(palabra);

  function random() {
    const random = Math.floor(Math.random() * palabrasArray.length);
    return random;
  }

  function clickLetras(e) {
    const boton = e.target;
    console.log(boton);
  }

  return (
    <div>
      <Imagen src={src} />

      {palabra !== undefined &&
        letras.map((letra, index) => {
          return <Boton letra={letra} key={index} id={index} clickLetras={clickLetras} />;
        })}

      {palabra === undefined && <BotonJugar jugar={"Jugar"} empezarJuego={empezarJuego} />}

      <div id="contenedor-palabra"></div>
    </div>
  );
};

export default AdivinaPalabra;
