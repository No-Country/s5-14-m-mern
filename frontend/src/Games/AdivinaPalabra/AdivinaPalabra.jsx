import { useState } from "react";
import Boton from "../../components/GamesComponents/AdivinaPalabraComponents/Botones/Boton";
import BotonJugar from "../../components/GamesComponents/AdivinaPalabraComponents/BotonJugar/BotonJugar";
import Imagen from "../../components/GamesComponents/AdivinaPalabraComponents/Imagen/Imagen";
import "../AdivinaPalabra/adivinaPalabra.sass";

const AdivinaPalabra = () => {
  const letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
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

  const [src, setSrc] = useState(0);
  const [palabra, setPalabra] = useState(0);
  const [errores, setErrores] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  let cantAciertos = 0;
  let palabraAdivinar;
  let acerto;
  // eslint-disable-next-line no-unused-vars
  let erro;

  function setearJuego() {
    setErrores(0);
    setAciertos(0);
    cantAciertos = 0;
    palabraAdivinar = undefined;
    setPalabra(undefined);
  }

  function empezarJuego() {
    setearJuego();

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
    boton.disabled = true;
    const spans = document.querySelectorAll("span");

    acerto = false;
    erro = false;
    for (let i = 0; i < palabra.length; i++) {
      const letra = boton.innerHTML.toLowerCase();
      console.log(letra);
      if (letra === palabra[i]) {
        spans[i].innerHTML = letra;
        acerto = true;
        cantAciertos++;
        setAciertos(aciertos + cantAciertos);
      }
    }
    cantAciertos = 0;

    if (acerto === false) {
      setErrores(errores + 1);
      setSrc(src + 1);
    }
  }

  return (
    <div className="container">
      <div className="container-juego">
        <h1 className="container-titulo">Adivina Palabra</h1>
        <div>Errores: {errores}</div>
        {errores === 7 ? "Haz perdido" : errores}
        <div>Aciertos: {aciertos}</div>
        {aciertos === palabra.length && "Haz ganado"}
        <Imagen src={src} />
        <div>
          {palabra !== 0 &&
            letras.map((letra, index) => {
              return <Boton letra={letra} key={index} id={index} clickLetras={clickLetras} />;
            })}
        </div>
        {palabra === 0 && <BotonJugar jugar={"Jugar"} empezarJuego={empezarJuego} />}

        <div id="contenedor-palabra"></div>
      </div>
    </div>
  );
};

export default AdivinaPalabra;
