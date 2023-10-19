import { Button, ButtonGroup, Dialog, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Timer = ({
  timeLeft,
  setTimeLeft,
  itemCount,
  category,
  foundItems,
  totalItems
}: {
  timeLeft: number,
  setTimeLeft: Function,
  itemCount: number,
  category: string,
  foundItems: number,
  totalItems: number,
}) => {
  const [running, setRunning] = useState(true);
  const [remaining, setRemaining] = useState(3599);
  const [giveUpSure, setGiveUpSure] = useState(false);
  const [newBestTime, setNewBestTime] = useState(false);
  const [bestTimeName, setBestTimeName] = useState("");

  const totalTime = itemCount > 700
    ? 3599
    : itemCount > 500
      ? 1800
      : itemCount > 300
        ? 1200
        : itemCount > 100
          ? 900
          : 600;

  useEffect(() => {
    setTimeLeft(totalTime);
  }, [itemCount]);

  useEffect(() => {
    setRunning(running && timeLeft > 0);
  }, [timeLeft]);

  useEffect(() => {
    if (foundItems === totalItems) {
      setTimeLeft(0);
      setRunning(false);
      const currentHighScore = localStorage.getItem(category);
      if (!currentHighScore || parseInt(currentHighScore.split("by")[0].replace(":", "")) > totalTime - remaining) {
        setNewBestTime(true);
      }
    }
  }, [foundItems]);

  const displayTime = (remainingTime: number) => {
    if (remainingTime <= 0) return "Time's up!";
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    return `${hours > 0 ? `${hours}:` : ""}${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getHighScore = () => {
    const highScore = localStorage.getItem(category);
    if (highScore) {
      return `Best: ${highScore}`;
    }
    return "No high score";
  };

  const saveBest = () => {
    setNewBestTime(false);
    localStorage.setItem(category, `${displayTime(Math.abs(remaining))} by ${bestTimeName}`);
  };

  const giveUp = () => {
    setGiveUpSure(false);
    setTimeLeft(0);
  };

  const styles = {
    button: {
      "&:disabled": {
        color: "gray",
        borderColor: "gray",
        backgroundColor: "#1A2F44",
      },
    },
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4} className="timer">
          <CountdownCircleTimer
            duration={timeLeft}
            colors={["#2E86C1", "#1ABC9C", "#F4D03F", "#E67E22", "#C0392B"]}
            colorsTime={[3599, 1800, 900, 600, 300]}
            isPlaying={running}
            updateInterval={1}
            size={100}
            strokeLinecap="butt"
            strokeWidth={8}
          >
            {({ remainingTime }) => {
              useEffect(() => {
                setRemaining(remainingTime);
              });
              return displayTime(remainingTime);
            }}
          </CountdownCircleTimer>
        </Grid>
        <Grid item xs={6}>
          <ButtonGroup className="buttons" orientation="vertical">
            <Button sx={styles.button} variant="outlined" onClick={() => setRunning(!running)} disabled={timeLeft <= 0}>
              {running ? "Pause" : "Resume"}
            </Button>
            <Button sx={styles.button} variant="outlined" onClick={() => setGiveUpSure(true)} disabled={timeLeft <= 0}>
              Give up?
            </Button>
          </ButtonGroup>
          <div className="header-string">{getHighScore()}</div>
        </Grid>
      </Grid>
      {!running && timeLeft > 0 &&
        <Grid container className="overlay">
          <Grid item xs={5}></Grid>
          <Grid item className="paused-message">Paused...no cheating! :)</Grid>
        </Grid>
      }
      <Dialog open={giveUpSure} maxWidth="sm" fullWidth>
        <DialogTitle className="dialog dialog-text">Give up?</DialogTitle>
        <DialogContent className="dialog">
          <p className="dialog-content-text">Are you sure you want to give up?</p>
          <ButtonGroup className="buttons">
            <Button variant="contained" onClick={giveUp}>Yeah</Button>
            <Button variant="contained" onClick={() => setGiveUpSure(false)}>Nah</Button>
          </ButtonGroup>
        </DialogContent>
      </Dialog>
      <Dialog open={newBestTime} maxWidth="sm" fullWidth>
        <DialogTitle className="dialog dialog-text">New Best Time!!</DialogTitle>
        <DialogContent className="dialog">
          <TextField
            className="text-field text-field-modal"
            label="Enter your name! (For the love of God be reasonable)"
            value={bestTimeName}
            InputLabelProps={{ sx: { color: "lightskyblue" } }}
            inputProps={{ maxLength: 10, sx: { color: "lightskyblue" } }}
            onChange={(event) => setBestTimeName(event.target.value)}
          />
          <Button variant="contained" onClick={saveBest}>Register</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
