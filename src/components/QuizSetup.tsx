import { Box, Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tagLine from "../assets/img/catchemall.png";
import logo from "../assets/img/logo.png";
import { Pokemon } from "../classes/Pokemon";
import { Category, EggGroup, TypeName } from "../enums";
import {
  allPokemonList,
  getNonEvolvers,
  getPokemonByGen
} from "../resources/pokemon/pokemonLists";
import { QuizButtons } from "./QuizButtons";

export const QuizSetup = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [options, setOptions] = useState(
    [] as { value: string; name: string }[]
  );
  const [includeOtherCategories, setIncludeOtherCategories] = useState(false);

  const startQuiz = () => {
    let pokemon: Pokemon[] = [];
    let displayText = "";

    switch (category) {
      case "all":
        pokemon = allPokemonList;
        displayText = "Gotta name 'em all!";
        break;
      case "category":
        if (subCategory === Category.NonEvolve) {
          pokemon = getNonEvolvers(includeOtherCategories);
        } else {
          pokemon = allPokemonList.filter((pokemon: Pokemon) => {
            return (
              pokemon.category === subCategory ||
              pokemon.category?.includes(subCategory as Category)
            );
          });
        }
        displayText = `Name the ${subCategory} Pokémon!`;
        break;
      case "generation":
        pokemon = getPokemonByGen(parseInt(subCategory));
        displayText = `Name the Generation ${subCategory} Pokémon!`;
        break;
      case "type":
        pokemon = allPokemonList.filter((pokemon) => {
          return pokemon.type === subCategory || pokemon.type2 === subCategory;
        });
        displayText = `Name the ${subCategory}-Type Pokémon!`;
        break;
      case "eggGroup":
        pokemon = allPokemonList.filter((pokemon) => {
          return pokemon.eggGroups.includes(subCategory as EggGroup);
        });
        displayText = `Name Pokémon in the ${subCategory} Egg Group!`;
        break;
    }
    navigate("/quiz/pokemon", { state: { pokemon, displayText } });
  };

  const setQuizCategory = (value: string): void => {
    setSubCategory("");
    setCategory(value);
  };

  const setOtherCategories = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIncludeOtherCategories(event.target.checked);
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
        setOptions(
          Object.entries(Category).map((value: [string, Category]) => ({
            value: value[1],
            name: value[1]
          }))
        );
        break;
      case "generation":
        setOptions(
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((gen: string) => ({
            value: gen,
            name: gen
          }))
        );
        break;
      case "type":
        setOptions(
          Object.keys(TypeName).map((key: string) => ({
            value: key,
            name: key
          }))
        );
        break;
      case "eggGroup":
        setOptions(
          Object.entries(EggGroup).map((value: [string, EggGroup]) => ({
            value: value[0],
            name: value[1]
          }))
        );
        break;
      default:
        setOptions([]);
    }
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
    checkbox: {
      fontWeight: "bold",
      padding: "4px",
      "&.Mui-checked": {
        color: "darkslateblue"
      }
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

          <QuizButtons
            value={category}
            onChangeFunc={setQuizCategory}
            options={baseOptions}
          />

          {options.length > 9 && (
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
          )}
          {options.length <= 9 && (
            <QuizButtons
              value={subCategory}
              onChangeFunc={setSubCategory}
              options={options}
            />
          )}

          {(category === "all" ||
            (category !== null && subCategory !== "")) && (
              <Grid item xs={12}>
                {subCategory === Category.NonEvolve && (
                  <FormControlLabel
                    label="Include other categories? (Legendaries, Mythicals, etc.)"
                    sx={{ ...styles.button, ...styles.checkbox }}
                    control={
                      <Checkbox
                        sx={styles.checkbox}
                        checked={includeOtherCategories}
                        onChange={setOtherCategories}
                      />
                    }
                  />
                )}
                <Button
                  sx={styles.button}
                  variant="contained"
                  onClick={startQuiz}
                >
                  Let's Go!
                </Button>
              </Grid>
            )}
        </Grid>
      </motion.div>
    </Box>
  );
};
