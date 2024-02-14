export const displayTime = (time: number): string => {
  const pad = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours > 0 ? `${hours}:${pad(minutes)}` : `${minutes}`}:${pad(seconds)}`;
};

export const sanitizeText = (text: string): string => {
  return text.replace(new RegExp(/é/g), "e").replace(new RegExp(/[^A-Za-z0-9]/g), "").toLowerCase();
};
