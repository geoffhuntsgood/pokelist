import CloseIcon from "@mui/icons-material/Close";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, ButtonGroup, Dialog, DialogContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { displayTime } from "../utils/utils";

export const Timer = ({
  setTimedOut,
  setBest,
  setPaused,
  displayText,
  done,
  itemCount
}: {
  setTimedOut: Function,
  setBest: Function,
  setPaused: Function,
  displayText: string,
  done: boolean,
  itemCount: number
}) => {
  const [running, setRunning] = useState(true);
  const [initial, setInitial] = useState(3599);
  const [final, setFinal] = useState(0);
  const [remaining, setRemaining] = useState(3599);
  const [giveUpSure, setGiveUpSure] = useState(false);
  const [newBest, setNewBest] = useState(false);

  useEffect(() => {
    const bestTime = parseInt(localStorage.getItem(displayText) || "0");
    if (bestTime && bestTime !== 0) {
      setBest(displayTime(bestTime));
    }
  }, []);

  useEffect(() => {
    const bestTime = parseInt(localStorage.getItem(displayText) || "0");
    if (bestTime && bestTime !== 0) {
      setBest(displayTime(bestTime));
    }
  }, [newBest]);

  useEffect(() => {
    const initialTime = Math.max(itemCount * 5, 900);
    setInitial(initialTime);
    setRemaining(initialTime);
  }, [itemCount]);

  useEffect(() => {
    if (remaining <= 0) {
      setTimedOut(true);
    }
    if (done) {
      setRemaining(0);
      setTimedOut(true);
      const timeLeft = initial - final;
      const bestTime = parseInt(localStorage.getItem(displayText) || "0");
      if (timeLeft < bestTime || bestTime === 0) {
        localStorage.setItem(displayText, `${timeLeft}`);
        setNewBest(true);
      }
    }
  }, [remaining, done]);

  useEffect(() => {
    setPaused(!running);
  }, [running]);

  const showTime = (remainingTime: number) => {
    if (remainingTime <= 0) return "Time's up!";
    else return displayTime(remainingTime);
  };

  const giveUp = () => {
    setGiveUpSure(false);
    setRemaining(-10);
  };

  const styles = {
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "darkslateblue",
      border: "2px solid darkslateblue",
      "&:disabled": {
        color: "gray",
        borderColor: "gray",
        backgroundColor: "#1A2F44",
      },
      "&:hover": {
        backgroundColor: "deepskyblue",
        border: "2px solid darkslateblue"
      }
    },
    buttons: {
      paddingTop: "35px"
    },
    timer: {
      marginTop: "20px",
      marginRight: "0",
      backgroundColor: "midnightblue",
      borderRadius: "50px"
    },
    dialog: {
      backgroundColor: "#192A3D",
      color: "white",
      fontSize: "2rem",
      zIndex: "999"
    },
    overlay: {
      backgroundColor: "#03045E",
      color: "white",
      zIndex: "99",
      position: "absolute",
      width: "100vw",
      height: "75vh",
      top: "50",
      left: "0"
    }
  };

  return (
    <>
      {newBest && <Confetti />}
      <Grid container>
        <Grid item xs={7} sx={styles.timer} className="timer">
          <CountdownCircleTimer
            duration={remaining}
            colors={["#2E86C1", "#1ABC9C", "#F4D03F", "#E67E22", "#C0392B"]}
            colorsTime={[3599, 1800, 900, 600, 300]}
            isPlaying={running}
            updateInterval={1}
            size={100}
            strokeLinecap="butt"
            strokeWidth={8}
          >
            {({ remainingTime }) => {
              if (done) {
                setFinal(remainingTime);
              }
              return showTime(remainingTime);
            }}
          </CountdownCircleTimer>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} sx={styles.buttons}>
          <ButtonGroup orientation="vertical">
            <Button sx={styles.button} onClick={() => setRunning(!running)} disabled={remaining <= 0}>
              {running ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>
            <Button sx={styles.button} onClick={() => setGiveUpSure(true)} disabled={remaining <= 0}>
              <CloseIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      {!running && remaining > 0 &&
        <Grid container sx={styles.overlay}>
          <Grid item xs={12}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item>Paused...no cheating! :)</Grid>
        </Grid>
      }
      <Dialog open={giveUpSure} maxWidth="sm" fullWidth>
        <DialogContent sx={styles.dialog}>
          <p>Are you sure you want to give up?</p>
          <Button sx={styles.button} onClick={giveUp}>Yeah</Button>
          <Button sx={styles.button} onClick={() => setGiveUpSure(false)}>Nah</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={newBest} maxWidth="lg" fullWidth>
        <DialogContent sx={styles.dialog}>
          <p>New Best Time! Congrats!</p>
          <Button sx={styles.button} onClick={() => setNewBest(false)}>Yay!</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
