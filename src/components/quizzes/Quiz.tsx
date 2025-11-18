import {
  Cancel,
  ChangeCircleRounded,
  PauseCircle,
  PlayCircle
} from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useStopwatch } from "react-timer-hook";
import type { Ability, Move, Pokemon } from "../../classes";
import type { HeaderList } from "../../utils/HeaderList";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { PKInput } from "../PKInput";
import { PKTypography } from "../PKTypography";
import { QuizTable } from "./QuizTable";

export const Quiz = ({
  label,
  items,
  setItems
}: {
  label: string;
  items: Pokemon[] | Move[] | Ability[];
  setItems: Dispatch<SetStateAction<Pokemon[] | Move[] | Ability[]>>;
}) => {
  const { width } = useWindowDimensions();

  const [headers, setHeaders] = useState<HeaderList>(["", "", ""]);
  const [bestTime, setBestTime] = useState("No record yet");
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [divider, setDivider] = useState(0);
  const [done, setDone] = useState(false);

  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({
    autoStart: true
  });

  const refresh = () => {
    setItems([]);
    setFoundItems([]);
    setDone(false);
  };

  const end = () => {
    pause();
    setDone(true);

    const updateBestTime = async () => {
      try {
        const timeString = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        const response = await axios.get(
          `https://geoff-express.onrender.com/set-best-time/${label}/${timeString}`
        );
        if (response.status === 201) {
          setBestTime(`New record! ${timeString}`);
        }
      } catch (error) {
        setBestTime("Couldn't set the new record :(");
        console.error(error);
      }
    };

    if (foundItems.length === items.length) {
      updateBestTime();
    }
  };

  const flipTimer = () => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  };

  useEffect(() => {
    setDivider(Math.ceil(items.length / 2));

    if ("dex" in items[0]) {
      setHeaders(["Dex", "Name", "Type"]);
    } else if ("description" in items[0]) {
      setHeaders(["Num", "Name", "Desc"]);
    } else {
      setHeaders(["Num", "Name", "Type"]);
    }
  }, [items]);

  useEffect(() => {
    if (foundItems.length === items.length) {
      end();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundItems]);

  useEffect(() => {
    const fetchBestTime = async () => {
      try {
        const response = await axios.get(
          `https://geoff-express.onrender.com/best-time/${label}`
        );
        const data = response.data;
        if (data) {
          setBestTime(
            data.includes("999")
              ? "No record yet"
              : `Current record: ${data.split("~")[1]}`
          );
        }
      } catch (error) {
        setBestTime("Can't get best time");
        console.error(error);
      }
    };

    fetchBestTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    box: {
      margin: "2rem auto",
      overflowY: "auto",
      height: "60vh",
      visibility: isRunning || done ? "visible" : "hidden"
    },
    timer: {
      animation: "pauseTimer 2s infinite"
    }
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        {width <= 900 && (
          <Grid size={4}>
            <Typography color="textSecondary" variant="h3">
              {bestTime}
            </Typography>
          </Grid>
        )}
        <Grid size={width < 900 ? 8 : 12}>
          <Typography
            color="textPrimary"
            variant="h2"
            sx={!isRunning ? styles.timer : {}}
          >
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}{" "}
            {done && foundItems.length === items.length && "GG!"}
          </Typography>
        </Grid>

        {width > 900 && (
          <Grid size={4}>
            <Typography color="textSecondary" variant="h3">
              {bestTime}
            </Typography>
          </Grid>
        )}
        <Grid size={width > 900 ? 4 : 8}>
          <PKInput
            label={label}
            items={items}
            foundItems={foundItems}
            setFoundItems={setFoundItems}
            disabled={!isRunning}
          />
        </Grid>
        <Grid size={4}>
          <Tooltip title="Start over?">
            <IconButton onClick={refresh}>
              <ChangeCircleRounded />
            </IconButton>
          </Tooltip>
          {!done && (
            <>
              <Tooltip title="Give up?">
                <IconButton onClick={end} disabled={done}>
                  <Cancel />
                </IconButton>
              </Tooltip>
              <Tooltip title={isRunning ? "pause" : "continue"}>
                <IconButton onClick={flipTimer} disabled={done}>
                  {isRunning ? <PauseCircle /> : <PlayCircle />}
                </IconButton>
              </Tooltip>
            </>
          )}
        </Grid>
      </Grid>

      {!isRunning && !done && <PKTypography text="Paused!" />}

      <Box sx={styles.box}>
        <Grid container spacing={1} justifyContent="center">
          {width <= 900 && (
            <Grid size={12}>
              <QuizTable
                headers={headers}
                items={items}
                foundItems={foundItems}
                done={done}
              />
            </Grid>
          )}
          {width > 900 && divider > 0 && (
            <>
              <Grid size={5}>
                <QuizTable
                  headers={headers}
                  items={items.slice(0, divider)}
                  foundItems={foundItems}
                  done={done}
                />
              </Grid>
              <Grid size={5}>
                <QuizTable
                  headers={headers}
                  items={items.slice(divider, items.length)}
                  foundItems={foundItems}
                  done={done}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};
