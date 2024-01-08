import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import tagLine from "../assets/img/catchemall.png";
import { Pokemon } from "../classes/Pokemon";
import { Category, EggGroup, TypeName } from "../enums";
import { allPokemonList } from "../resources/pokemon/allPokemonList";
import { QuizButtons } from "./QuizButtons";

export const QuizSetup = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [options, setOptions] = useState([] as { value: string, name: string }[]);

  const startQuiz = () => {
    let pokemon: Pokemon[];
    let displayText: string;

    switch (category) {
      case "all":
        pokemon = allPokemonList;
        displayText = "Gotta name 'em all!";
        break;
      case "category":
        pokemon = allPokemonList.filter((pokemon) => pokemon.category === subCategory as Category);
        displayText = `Name the ${subCategory} Pokémon!`;
        break;
      case "generation":
        pokemon = allPokemonList.filter((pokemon) => pokemon.generation === parseInt(subCategory));
        displayText = `Name the Generation ${subCategory} Pokémon!`;
        break;
      case "type":
        pokemon = allPokemonList.filter((pokemon) => {
          const type = subCategory as TypeName;
          return pokemon.type === type || pokemon.type2 === type;
        });
        displayText = `Name the ${subCategory}-Type Pokémon!`;
        break;
      case "eggGroup":
        pokemon = allPokemonList.filter((pokemon) => {
          const eggGroup = subCategory as EggGroup;
          return pokemon.eggGroups.group1 === eggGroup || pokemon.eggGroups.group2 === eggGroup;
        });
        displayText = `Name Pokémon in the ${subCategory} Egg Group!`;
        break;
      default:
        pokemon = [];
        displayText = "";
        break;
    }
    navigate("/quiz/pokemon", { state: { pokemon, displayText } });
  };

  const setQuizCategory = (value: string) => {
    setSubCategory("");
    setCategory(value);
  };

  const baseOptions = [
    { value: "all", name: "All of them!" },
    { value: "category", name: "Category" },
    { value: "generation", name: "Generation" },
    { value: "type", name: "Type" },
    { value: "eggGroup", name: "Egg Group" }
  ];

  useEffect(() => {
    switch (category) {
      case "category":
        setOptions(Object.entries(Category).map((value) => ({ value: value[0], name: value[1] })));
        break;
      case "generation":
        setOptions(["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((gen: string) => ({ value: gen, name: gen })));
        break;
      case "type":
        setOptions(Object.keys(TypeName).map((key: string) => ({ value: key, name: key })));
        break;
      case "eggGroup":
        setOptions(Object.entries(EggGroup).map((value) => ({ value: value[0], name: value[1] })));
        break;
      default:
        setOptions([]);
    };
  }, [category]);

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
    background: {
      height: "90vh",
      width: "90vw",
      margin: "0 auto",
      paddingTop: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "10px"
    }
  };

  return (
    <Box sx={styles.background}>
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div><img src={logo} /></div>
            <img src={tagLine} width={500} height={100} />
          </Grid>

          <QuizButtons
            value={category}
            onChangeFunc={setQuizCategory}
            options={baseOptions}
          />

          {options.length > 9 &&
            <>
              <QuizButtons
                value={subCategory}
                onChangeFunc={setSubCategory}
                options={options.slice(0, options.length / 2)}
              />
              <QuizButtons
                value={subCategory}
                onChangeFunc={setSubCategory}
                options={options.slice(options.length / 2, options.length)}
              />
            </>
          }
          {options.length <= 9 &&
            <QuizButtons
              value={subCategory}
              onChangeFunc={setSubCategory}
              options={options}
            />
          }

          {(category === "all" || (category !== null && subCategory !== "")) &&
            <Grid item xs={12}>
              <Button sx={styles.button} variant="contained" onClick={startQuiz}>
                Let's Go!
              </Button>
            </Grid>
          }
        </Grid>
      </motion.div>
    </Box>
  )
}