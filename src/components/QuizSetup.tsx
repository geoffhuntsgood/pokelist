import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/pokemonApi";
import tagLine from "../assets/img/catchemall.png";
import logo from "../assets/img/logo.png";
import { Pokemon } from "../classes/Pokemon";
import { Category, EggGroup, Type } from "../enums";
import { QuizCheckboxes } from "./QuizCheckboxes";

export const QuizSetup = () => {
  const navigate = useNavigate();

  const mapEntries = (values: (Category | Type | EggGroup | string)[]) => {
    return Object.fromEntries(values.map((value: string) => {
      return [value, false];
    }));
  };

  const setFalse = (state: { [k: string]: boolean }) => {
    Object.keys(state).forEach((key: string) => {
      state[key] = false;
    });
  };

  const [categoryState, setCategoryState] = useState(mapEntries(Object.values(Category)));
  const [genState, setGenState] = useState(mapEntries(["1", "2", "3", "4", "5", "6", "7", "8", "9"]));
  const [typeState, setTypeState] = useState(mapEntries(Object.values(Type)));
  const [eggGroupState, setEggGroupState] = useState(mapEntries(Object.values(EggGroup)));
  const [otherState, setOtherState] = useState(mapEntries(["Name 'em all!", "Include alternate forms", "Include regional variants"]));
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (otherState["Name 'em all!"]) {
      setFalse(categoryState);
      setFalse(genState);
      setFalse(typeState);
      setFalse(eggGroupState);
    }
  }, [otherState]);

  useEffect(() => {
    setReady(
      Object.values(categoryState).some(x => x) ||
      Object.values(genState).some(x => x) ||
      Object.values(typeState).some(x => x) ||
      Object.values(eggGroupState).some(x => x) ||
      otherState["Name 'em all!"]
    );
  }, [categoryState, genState, typeState, eggGroupState, otherState]);

  const startQuiz = () => {
    let pokemon: Pokemon[] = [];

    if (otherState["Name 'em all!"]) {
      pokemon = api.allPokemon;
    } else {
      Object.keys(genState).forEach((key: string) => {
        if (genState[key]) pokemon = pokemon.concat(api.getByGen(parseInt(key)));
      });

      Object.keys(categoryState).forEach((key: string) => {
        if (categoryState[key]) pokemon = pokemon.concat(api.getByCategory(key as Category));
      });

      Object.keys(typeState).forEach((key: string) => {
        if (typeState[key]) pokemon = pokemon.concat(api.getByType(key as Type));
      });

      Object.keys(eggGroupState).forEach((key: string) => {
        if (eggGroupState[key]) pokemon = pokemon.concat(api.getByEggGroup(key as EggGroup));
      });
    }

    if (otherState["Include alternate forms"]) {
      pokemon = api.includeAlternateForms(pokemon);
    }

    if (otherState["Include regional variants"]) {
      pokemon = api.includeRegionalVariants(pokemon);
    }

    if (pokemon.length > 0) {
      navigate("/quiz/pokemon", { state: { pokemon } });
    } else {
      setError(true);
    }
  };

  const pageMotion = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 50, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5 } }
  };

  const styles = {
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "darkslateblue",
      border: "2px solid darkslateblue"
    },
    checkbox: {
      fontWeight: "bold",
      padding: "4px",
      "&.Mui-checked": {
        color: "darkslateblue"
      }
    },
    background: {
      height: "95vh",
      width: "95vw",
      margin: "0 auto",
      paddingTop: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "10px"
    }
  };

  return (
    <Box sx={styles.background}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <img src={logo} />
            </div>
            <img src={tagLine} width={500} height={100} />
          </Grid>

          <QuizCheckboxes label="Category" state={categoryState} setStateFunc={setCategoryState} />
          <QuizCheckboxes label="Generation" state={genState} setStateFunc={setGenState} />
          <QuizCheckboxes label="Type" state={typeState} setStateFunc={setTypeState} />
          <QuizCheckboxes label="Egg Group" state={eggGroupState} setStateFunc={setEggGroupState} />
          <QuizCheckboxes label="Other" state={otherState} setStateFunc={setOtherState} />

          {ready &&
            <Grid item xs={12}>
              <Button
                sx={styles.button}
                variant="contained"
                onClick={startQuiz}
              >
                Let's Go!
              </Button>
            </Grid>
          }
        </Grid>
      </motion.div>
    </Box>
  );
};
