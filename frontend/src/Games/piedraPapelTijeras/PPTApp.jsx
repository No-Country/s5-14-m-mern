import React, { useEffect, useState } from "react";
import rock from "./images/piedra.png";
import scissors from "./images/tijera.png";
import paper from "./images/papel.png";
import "./ppt.sass";

export const PPTApp = () => {
  const options = [
    { src: rock, name: "piedra" },
    { src: scissors, name: "tijera" },
    { src: paper, name: "papel" }
  ];
  const [option, setOption] = useState(null);
  const [selected, setSelected] = useState(null);
  const [final, setFinal] = useState(null);

  const handlePPT = opt => {
    const index = Math.floor(Math.random() * options.length);
    setOption(options[index]);
    setSelected(opt);
  };

  useEffect(() => {
    if (option !== null) {
      result(selected.name, option.name);
    }
  }, [option]);

  const result = (sel, op) => {
    if (
      (sel === "piedra" && op === "tijera") ||
      (sel === "tijera" && op === "papel") ||
      (sel === "papel" && op === "piedra")
    ) {
      setFinal("win");
    } else if (sel === op) {
      setFinal("tie");
    } else {
      setFinal("lose");
    }
  };

  const reset = () => {
    setOption(null);
    setSelected(null);
    setFinal(null);
  };

  return (
    <div className="app">
      <h1>¡Juega al piedra, papel o tijeras con Juancito!</h1>
      {selected === null && <h2>Elige una opción</h2>}
      <div>
        {options.map((opt, i) => (
          <span className={selected !== null ? "d-none" : undefined} key={i}>
            <img
              onClick={() => handlePPT(opt)}
              className="img-options"
              alt={opt.name}
              src={opt.src}
            />
          </span>
        ))}
        {selected !== null && (
          <div className="d-flex">
            <div>
              <div className="d-flex">
                <div className="txt">
                  <h3>Elegiste: </h3>
                  <h2>
                    <strong>{selected.name}</strong>
                  </h2>
                </div>
                <img className="img-selected" src={selected.src} alt={selected.name} />
              </div>
              <div className="d-flex">
                <div className="txt">
                  <h3>Juancito eligió:</h3>
                  <h2>
                    <strong>{option.name}</strong>
                  </h2>
                </div>
                <img className="img-selected" src={option.src} alt={option.name} />
              </div>
            </div>
            <div>
              {final === "win" && <h1>GANASTE!!!</h1>}
              {final === "tie" && <h1>Empate</h1>}
              {final === "lose" && (
                <div>
                  <h1>Ganó Juancito</h1> <h1>Ánimo!, a jugar de nuevo!!</h1>
                </div>
              )}
              {final !== null && <button onClick={reset}>Jugar de Nuevo</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
