import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Trivia.module.sass";
import {
  convertMillisecondsToMinutesAndSeconds,
  progressPercentage
} from "../../../../utils/triviaUtils/gameFunctions/mathfunctionsOfTrivia";
import alarm from "../../../../Games/Trivia/assets/alarm.svg";

export default function Progress() {
  const [time, setTime] = useState(0);
  const [cronometro, setCronometro] = useState(true);
  const [percentaje, setPersentaje] = useState(0);

  useEffect(() => {
    if (time >= 120000) {
      setCronometro(false);
    }
    let interval;
    if (cronometro) {
      interval = setInterval(() => {
        setTime(time => time + 10);
        setPersentaje(progressPercentage({ progressTime: time, totalTime: 120000 }));
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [cronometro, time]);

  const { minutes, seconds } = convertMillisecondsToMinutesAndSeconds({ milliseconds: time });

  return (
    <div className={styles.containerProgressBar}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${percentaje}%` }}>
          <span className={styles.timer}>{`${minutes}:${seconds}`}</span>
        </div>
        <div className={styles.alarmContainer}>
          <img src={alarm} alt="alarm" className={styles.alarmIcon} />
        </div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  progressTime: PropTypes.number,
  timeTotal: PropTypes.number
};
