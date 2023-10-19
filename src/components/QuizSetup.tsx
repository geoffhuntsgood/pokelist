import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { AttackType, Category, EggGroupName, TypeName } from "../enums";
import { QuizDropdown } from "./QuizDropdown";

export const QuizSetup = () => {
  const navigate = useNavigate();
  const [quizSelect, setQuizSelect] = useState("");
  const [pokemonSelect, setPokemonSelect] = useState("");
  const [moveSelect, setMoveSelect] = useState("");
  const [abilitySelect, setAbilitySelect] = useState("");

  const [subCategory, setSubCategory] = useState("");
  const [showDescriptions, setShowDescriptions] = useState(false);

  const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const quizReady = () => {
    const pokemon = quizSelect === "pokemon" && (pokemonSelect === "all" || (pokemonSelect !== null && subCategory !== ""));
    const moves = quizSelect === "moves" && (moveSelect === "all" || moveSelect === "signature" || (moveSelect !== null && subCategory !== ""));
    const abilities = quizSelect === "abilities" && (abilitySelect === "all" || (abilitySelect !== null && subCategory !== ""));
    return pokemon || moves || abilities;
  };

  const startQuiz = () => {
    if (quizSelect === "pokemon") {
      navigate("/quiz/pokemon", { state: { category: pokemonSelect, subCategory: subCategory } });
    } else if (quizSelect === "moves") {
      navigate("/quiz/moves", { state: { category: moveSelect, subCategory: subCategory, showDescriptions: showDescriptions } });
    } else if (quizSelect === "abilities") {
      navigate("/quiz/abilities", { state: { category: abilitySelect, subCategory: subCategory } });
    }
  };

  const updateQuizSelect = (value: string) => {
    setPokemonSelect("");
    setMoveSelect("");
    setAbilitySelect("");
    setSubCategory("");
    setQuizSelect(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1><img src={logo} /></h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <p>
          If you're like me and you like to hyperfixate on things and one of those things
          happens to be Pokémon, then <b><i>look no further!</i></b> I've got a quiz generator
          that lets you guess the names of Pokémon, Moves, and Abilities by some fun categories.
        </p>
        <p>
          If you like to hyperfixate on things in this way and one of those things is <i>not</i> Pokémon,
          then go check out <a href="https://jetpunk.com">JetPunk</a> - it's a website with lots of quizzes on many
          topics, and it inspired this generator. They do lots of good things like plant trees with their
          ad revenue too.
        </p>
      </Grid>
      <QuizDropdown
        labelId="quiz-select-label"
        label="Take a quiz! Name the things!"
        value={quizSelect}
        onChangeFunc={(value: string) => updateQuizSelect(value)}
        options={[
          { value: "pokemon", name: "Pokémon" },
          { value: "moves", name: "moves" },
          { value: "abilities", name: "abilities" }
        ]}
      />

      {/* Pokémon Select Options */}
      {
        quizSelect === "pokemon" &&
        <QuizDropdown
          labelId="pokemon-select-label"
          label="Pokémon Quiz"
          value={pokemonSelect}
          onChangeFunc={setPokemonSelect}
          options={[
            { value: "all", name: "All of them!" },
            { value: "category", name: "By Category" },
            { value: "generation", name: "By Generation" },
            { value: "type", name: "By Type" },
            { value: "eggGroup", name: "By Egg Group" }
          ]}
        />
      }
      {
        pokemonSelect === "category" &&
        <QuizDropdown
          labelId="pokemon-select-category"
          label="Which Pokémon category?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={[
            { value: Category.Fossil, name: "Fossils" },
            { value: Category.Legendary, name: "Legendaries" },
            { value: Category.Mythical, name: "Mythicals" },
            { value: Category.Paradox, name: "Paradoxes" },
            { value: Category.Starter, name: "Starters" },
            { value: Category.UltraBeast, name: "Ultra Beasts" }
          ]}
        />
      }
      {
        pokemonSelect === "generation" &&
        <QuizDropdown
          labelId="pokemon-select-generation"
          label="Which generation?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={generations.map((gen: number) => ({ value: `${gen}`, name: `${gen}` }))}
        />
      }
      {
        pokemonSelect === "type" &&
        <QuizDropdown
          labelId="pokemon-select-type"
          label="Which type?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={Object.keys(TypeName).map((key: string) => ({ value: key, name: key }))}
        />
      }
      {
        pokemonSelect === "eggGroup" &&
        <QuizDropdown
          labelId="pokemon-select-eggGroup"
          label="Which egg group?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={Object.keys(EggGroupName).map((key: string) => ({ value: key, name: key }))}
        />
      }

      {/* Move Select Options */}
      {
        quizSelect === "moves" &&
        <QuizDropdown
          labelId="move-select-label"
          label="Move Quiz"
          value={moveSelect}
          onChangeFunc={setMoveSelect}
          options={[
            { value: "all", name: "All of them!" },
            { value: "signature", name: "Signature moves" },
            { value: "generation", name: "By Generation" },
            { value: "type", name: "By Type" },
            { value: "attackType", name: "By Attack Type" },
          ]}
        />
      }
      {
        moveSelect === "generation" &&
        <QuizDropdown
          labelId="move-select-generation"
          label="Which generation?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={generations.map((gen: number) => ({ value: `${gen}`, name: `${gen}` }))}
        />

      }
      {
        moveSelect === "type" &&
        <QuizDropdown
          labelId="move-select-type"
          label="Which type?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={Object.keys(TypeName).map((key: string) => ({ value: `${key}`, name: `${key}` }))}
        />
      }
      {
        moveSelect === "attackType" &&
        <QuizDropdown
          labelId="move-select-attackType"
          label="Which attack type?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={Object.entries(AttackType).map((entry) => ({ value: `${entry[1]}`, name: `${entry[0]}` }))}
        />
      }

      {/* Ability Select Options */}
      {
        quizSelect === "abilities" &&
        <QuizDropdown
          labelId="ability-select-label"
          label="Ability Quiz"
          value={abilitySelect}
          onChangeFunc={setAbilitySelect}
          options={[
            { value: "all", name: "All of them!" },
            { value: "generation", name: "By Generation" },
          ]}
        />
      }
      {
        abilitySelect === "generation" &&
        <QuizDropdown
          labelId="ability-select-generation"
          label="Which generation?"
          value={subCategory}
          onChangeFunc={setSubCategory}
          options={generations.slice(2).map((gen: number) => ({ value: `${gen}`, name: `${gen}` }))}
        />
      }

      {
        quizReady() &&
        <Grid item xs={12}>
          {quizSelect === "moves" &&
            <FormControlLabel
              label="Show descriptions?"
              control={<Checkbox size="medium" checked={showDescriptions} onChange={(event) => setShowDescriptions(event.target.checked)} />}
            />
          }
          <Button variant="contained" onClick={startQuiz}>
            Gotta Name 'Em All!
          </Button>
        </Grid>
      }
    </Grid>
  )
}