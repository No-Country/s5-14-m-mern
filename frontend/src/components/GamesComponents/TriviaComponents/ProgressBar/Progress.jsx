import PropTypes from "prop-types";
import styles from "./Trivia.module.sass";
import alarm from "../../../../Games/Trivia/assets/alarm.svg";

export default function Progress({ minutes, seconds, percentaje }) {
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
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  percentaje: PropTypes.number
};
