import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import style from "./tablero.module.sass";

const initialState = [
  [false, false, false],
  [true, false, true],
  [true, true, true],
  [true, true, true],
  [true, true, true]
];

const setBoard = () => {
  const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];
  board.forEach((fila, i) => {
    fila.forEach((columna, j) => {
      board[i][j] = Math.floor(Math.random() * 3) === 2;
    });
  });
  return board;
};

const LightGame = () => {
  const [lights, setLights] = useState(initialState);
  const [play, setPlay] = useState(false);
  const [score, setScore] = useState("0");
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const win = !lights.map(row => row.every(e => e === true)).includes(false);
      if (win) {
        const gameScore = 3600 - Math.floor(time / 1000);
        setIsActive(false);
        setScore(gameScore > 1 ? gameScore.toString() : "1");
        setPlay(false);
      }
    }, 200);
  }, [lights]);

  useEffect(() => {
    let interval = null;
    if (isActive === true) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const startGame = () => {
    if (score === "0") {
      setPlay(true);
      setIsActive(true);
    } else {
      setTime(0);
      setIsActive(true);
      setLights(setBoard());
      setScore("0");
      setPlay(true);
    }
  };

  const handleClick = (row, column) => {
    const newBoard = lights.map(a => a);
    newBoard[row][column] = !newBoard[row][column];

    if (row !== 0 && row - 1 >= 0) newBoard[row - 1][column] = !newBoard[row - 1][column];
    if (row !== newBoard.length && row + 1 < newBoard.length)
      newBoard[row + 1][column] = !newBoard[row + 1][column];

    if (column !== 0 && column - 1 >= 0) newBoard[row][column - 1] = !newBoard[row][column - 1];

    if (column !== newBoard[0].length && column + 1 < newBoard[0].length)
      newBoard[row][column + 1] = !newBoard[row][column + 1];

    setLights(newBoard);
  };

  return (
    <div className={style.container}>
      <div className={style.board}>
        {play && (
          <>
            <div className={style.timer}>
              <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>
            {lights.map((row, i) =>
              row.map((column, j) => (
                <button
                  key={`${i}${j}`}
                  className={`${style.light} ${column ? style.on : style.off}`}
                  onClick={() => handleClick(i, j)}
                />
              ))
            )}
          </>
        )}
        <Modal play={play} startGame={startGame} score={score} />
      </div>
    </div>
  );
};

export default LightGame;