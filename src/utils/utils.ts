
const pad = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const displayTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours > 0 ? `${hours}:${pad(minutes)}` : `${minutes}`}:${pad(seconds)}`;
};
