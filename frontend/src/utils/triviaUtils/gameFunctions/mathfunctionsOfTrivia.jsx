export const randomNumber = ({ items }) => {
  const itemsLength = items.length;
  return Math.floor(Math.random() * itemsLength);
};

export const progressPercentage = ({ progressTime, totalTime }) => {
  const percentage = (progressTime * 100) / totalTime;
  return percentage;
};
export const totalTime = ({ minutes = 0, milliseconds = 0 }) => {
  if (milliseconds) {
    return new Date(new Date().getTime() + milliseconds);
  } else {
    const convertMiliseconds = minutes * 1000;
    const time = new Date(new Date().getTime() + convertMiliseconds);
    return time;
  }
};

export const convertMinutesAndSecondsToMilliseconds = ({ seconds, minutes }) => {
  const milliseconds = (seconds + minutes * 60) * 1000;
  return milliseconds;
};

export const convertMillisecondsToMinutesAndSeconds = ({ milliseconds }) => {
  const seconds = Math.round((milliseconds / 1000) % 60)
    .toString()
    .padStart(2, 0);
  const minutes = parseInt(milliseconds / 1000 / 60)
    .toString()
    .padStart(2, 0);
  return { minutes, seconds };
};

export const timeLeftOfProgress = ({ totalTime }) => {
  console.log(totalTime, "total time desde time left progresive");
  return totalTime.getTime() - new Date().getTime();
};
