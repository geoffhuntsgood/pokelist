import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useLocation } from "react-router-dom";
import { Ability, Move, Pokemon } from "../classes";
import { sanitizeInput } from "../utils/utils";
import { QuizTable } from "./QuizTable";
import { Timer } from "./Timer";

export const Quiz = ({ type, headers, getItems, getCategoryString }: { type: string, headers: string[], getItems: Function, getCategoryString: Function }) => {
  const state = useLocation().state;

  const [loadTime, setLoadTime] = useState(1);
  const [data, setData] = useState([] as Pokemon[] | Move[] | Ability[]);
  const [divider, setDivider] = useState(0);
  const [showItems, setShowItems] = useState([] as string[]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(3599);
  const categoryString = getCategoryString();

  useEffect(() => {
    let timeout;
    if (loadTime > 0) {
      timeout = setTimeout(() => {
        setLoadTime(loadTime - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
    }
  }, [loadTime]);

  useEffect(() => {
    const dataSet = getItems(state.category);
    setData(dataSet);
    setDivider(Math.floor(dataSet.length / 3));
  }, []);

  const getInputText = (input: string) => {
    const sanitized = sanitizeInput(input);
    if (data.find((move) => move.name === sanitized) && !showItems.includes(sanitized)) {
      setShowItems(showItems.concat(sanitized));
      setInput("");
    } else {
      setInput(input);
    }
  };

  const styles = {
    helpText: {
      color: "lightskyblue",
      backgroundColor: "#192A3D",
      margin: "0",
      paddingTop: "2px",
      paddingLeft: "10px",
    },
  };

  return (
    <>
      {loadTime > 0 &&
        <Box className="loading-box">
          <CountdownCircleTimer
            duration={1}
            colors={"#2E86C1"}
            isPlaying={true}
            size={100}
            strokeLinecap="butt"
            strokeWidth={8}
          >
            {() => "Loading..."}
          </CountdownCircleTimer>
        </Box>
      }
      {loadTime === 0 &&
        <>
          <Grid container spacing={0.5} className="header-grid header-bottom">
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} itemCount={data.length} category={categoryString} foundItems={showItems.length} totalItems={data.length} />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="text-field"
                label={`Name ${categoryString}!`}
                value={input}
                InputLabelProps={{ sx: { color: "lightskyblue" } }}
                InputProps={{ sx: { color: "lightskyblue" } }}
                FormHelperTextProps={{ sx: styles.helpText }}
                disabled={showItems.length === data.length || timeLeft === 0}
                helperText={`${showItems.length} out of ${data.length} found`}
                onChange={(event) => getInputText(event.target.value)}
              />
            </Grid>
          </Grid>

          {type === "pokemon" &&
            <QuizTable
              headers={headers}
              showItems={showItems}
              showDescriptions={state.showDescriptions}
              data={data}
              pokemon={{
                data1: data.slice(0, divider) as Pokemon[],
                data2: data.slice(divider, divider * 2 + 1) as Pokemon[],
                data3: data.slice(divider * 2 + 1, data.length) as Pokemon[]
              }}
            />
          }
          {type === "moves" &&
            <QuizTable
              headers={headers}
              showItems={showItems}
              showDescriptions={state.showDescriptions}
              data={data}
              moves={{
                data1: data.slice(0, divider) as Move[],
                data2: data.slice(divider, divider * 2 + 1) as Move[],
                data3: data.slice(divider * 2 + 1, data.length) as Move[]
              }}
            />
          }
          {type === "abilities" &&
            <QuizTable
              headers={headers}
              showItems={showItems}
              showDescriptions={state.showDescriptions}
              data={data}
              abilities={data as Ability[]}
            />
          }
        </>
      }
    </>
  );
};
