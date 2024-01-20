import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pokemon } from "../classes/Pokemon";
import { QuizTable } from "./QuizTable";
import { Timer } from "./Timer";
import { sanitizeText } from "../utils/utils";

export const PokemonQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pokemon = location.state.pokemon;
  const displayText = location.state.displayText;

  const [showItems, setShowItems] = useState([] as string[]);
  const [input, setInput] = useState("");
  const [timedOut, setTimedOut] = useState(false);
  const [best, setBest] = useState("");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (showItems.length === pokemon.length) {
      setTimedOut(true);
    }
  }, [showItems, pokemon.length]);

  const getInputText = (input: string) => {
    const sanitized = sanitizeText(input);
    if (
      pokemon.find((item: Pokemon) => item.simpleName === sanitized) &&
      !showItems.includes(sanitized)
    ) {
      setShowItems(
        sanitized === "nidoran"
          ? showItems.concat(sanitized).concat(sanitized)
          : showItems.concat(sanitized)
      );
      setInput("");
    } else {
      setInput(input);
    }
  };

  const styles = {
    helpText: {
      color: "lightskyblue",
      backgroundColor: "midnightblue",
      margin: "0",
      paddingTop: "2px",
      paddingLeft: "10px"
    },
    textField: {
      width: "100%",
      margin: "35px 20px",
      backgroundColor: "#03045E"
    },
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "darkslateblue",
      border: "2px solid darkslateblue",
      marginTop: "40px",
      "&:hover": {
        backgroundColor: "deepskyblue",
        border: "2px solid darkslateblue"
      }
    },
    best: {
      width: "80%",
      margin: "35px",
      padding: "10px",
      fontWeight: "bold",
      backgroundColor: "#03045E",
      border: "2px solid deepskyblue"
    },
    background: {
      height: "90vh",
      width: "90vw",
      margin: "0 auto",
      paddingTop: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "10px"
    }
  };

  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 50, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }
  };

  return (
    <Box sx={styles.background}>
      <motion.span
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <Grid container spacing={0.5}>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <Timer
              setTimedOut={setTimedOut}
              setBest={setBest}
              setPaused={setPaused}
              displayText={displayText}
              done={showItems.length === pokemon.length}
              itemCount={pokemon.length}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={styles.textField}
              label={displayText}
              value={input}
              variant="filled"
              InputLabelProps={{ sx: { color: "lightskyblue" } }}
              InputProps={{ sx: { color: "lightskyblue" } }}
              FormHelperTextProps={{ sx: styles.helpText }}
              disabled={
                showItems.length === pokemon.length || timedOut || paused
              }
              error={timedOut}
              helperText={
                <span>
                  {showItems.length} out of {pokemon.length} found
                </span>
              }
              onChange={(event) => getInputText(event.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={styles.best}>
              Your best: {best || <i>Not attempted yet</i>}
            </Typography>
          </Grid>
          {timedOut && (
            <Grid item xs={2}>
              <Button sx={styles.button} onClick={() => navigate("/")}>
                Try again!
              </Button>
            </Grid>
          )}
        </Grid>

        <QuizTable
          showItems={showItems}
          timedOut={timedOut}
          data={pokemon}
        />
      </motion.span>
    </Box>
  );
};
