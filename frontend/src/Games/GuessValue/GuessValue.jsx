import { useState, useEffect } from "react"
import { getMathOperation } from "./Utils/getMathOperation";

const GuessValue = () => {
    const [difficulty, setDifficulty] = useState(0);
    const [quantityOfValues, setQuantityOfValues] = useState(0);
    const [showMain, setShowMain] = useState(false);
    const [success, setSuccess] = useState(0);
    const [failures, setFailures] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setDifficulty(e.target[0].value);
        setQuantityOfValues(e.target[1].value);
        getMathOperation(difficulty, quantityOfValues);
        setShowMain(true);
    }
    return (
        <div style={{ width: "100%", height: "100%",justifyContent:"center", display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(180deg, #0C0E18 0%, #292759 100%)" }}>
            {!difficulty && !showMain &&
                (<form onSubmit={handleSubmit} style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
                    <h2>Elige la dificultad en la que deseas jugar</h2>
                    <select>
                        <option value="2">Fácil</option>
                        <option value="3">Medio</option>
                        <option value="4">Difícil</option>
                    </select>
                    <h2>Elige la cantidad de valores que quieres usar</h2>
                    <select>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button style={{alignSelf:"center"}} type="submit">Confirmar</button>
                </form>
                )
            }{showMain &&
                <form>
                    <input type="text" placeholder="Número" /><h2>{ }</h2>
                </form>}
        </div >
    )
}

export default GuessValue;