import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/pokemonApi";
import tagLine from "../assets/img/catchemall.png";
import logo from "../assets/img/logo.png";
import { Pokemon } from "../classes/Pokemon";
import { Category, EggGroup, Type } from "../enums";
import { QuizButtons } from "./QuizButtons";

export const QuizSetup = () => {
  const navigate = useNavigate();
  const [mainSelect, setMainSelect] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory("");
  }, [mainSelect]);

  const startQuiz = () => {
    let pokemon: Pokemon[] = [];
    let displayText = "";

    if (mainSelect === "All of them!") {
      pokemon = api.allPokemon;
      displayText = "Gotta name 'em all!";
    } else if (Object.values(Category).includes(category as Category)) {
      pokemon = api.getByCategory(category as Category);
      displayText = category === "Ultra Beast" ? "Name the Ultra Beasts!" : `Name the ${category} Pokémon!`;
    } else if (!isNaN(+category)) {
      pokemon = api.getByGen(+category);
      displayText = `Name the Generation ${category} Pokémon!`;
    } else if (Object.values(Type).includes(category as Type)) {
      pokemon = api.getByType(category as Type);
      displayText = `Name the ${category}-Type Pokémon!`;
    } else if (Object.values(EggGroup).includes(category as EggGroup)) {
      pokemon = api.getByEggGroup(category as EggGroup);
      displayText = `Name Pokémon in the ${category} Egg Group!`;
    }

    if (pokemon.length > 0) {
      navigate("/pokeQuiz", { state: { pokemon: pokemon, displayText: displayText } });
    }
  };

  const styles = {
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "darkslateblue",
      border: "2px solid darkslateblue"
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

  const pageMotion = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 50, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5 } }
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

          <QuizButtons state={mainSelect} setStateFunc={setMainSelect} options={["All of them!", "Category", "Generation", "Type", "Egg Group"]} />

          {mainSelect === "Category" &&
            <QuizButtons state={category} setStateFunc={setCategory} options={Object.values(Category)} />
          }
          {mainSelect === "Generation" &&
            <QuizButtons state={category} setStateFunc={setCategory} options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} />
          }
          {mainSelect === "Type" &&
            <QuizButtons state={category} setStateFunc={setCategory} options={Object.values(Type)} />
          }
          {mainSelect === "Egg Group" &&
            <QuizButtons state={category} setStateFunc={setCategory} options={Object.values(EggGroup)} />
          }

          {(mainSelect === "All of them!" || category !== "") &&
            <Grid item xs={12}>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
              >
                <Button sx={styles.button} variant="contained" onClick={startQuiz}>
                  Let's Go!
                </Button>
              </motion.div>
            </Grid>
          }
        </Grid>
      </motion.div>
    </Box>
  );
};
