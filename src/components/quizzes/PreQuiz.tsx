import { Grid, Tab, Tabs } from "@mui/material";
import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent
} from "react";
import type { Ability, Move, Pokemon } from "../../classes";
import { MoveCategory, PokemonCategory, Type } from "../../enums";
import {
  getAbilitiesByGen,
  getMovesByCat,
  getMovesByGen,
  getMovesByType,
  getPokemonByCat,
  getPokemonByGen,
  getPokemonByType
} from "../../utils/api";
import { PKButton } from "../PKButton";
import { PKRadio } from "../PKRadio";
import { PKSelect } from "../PKSelect";

export const PreQuiz = ({
  setItems,
  setLabel
}: {
  setItems: Dispatch<SetStateAction<Pokemon[] | Move[] | Ability[]>>;
  setLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [pick, setPick] = useState("Pokémon");
  const [group, setGroup] = useState("gen");
  const [gen, setGen] = useState("All");
  const [type, setType] = useState(Type.Bug as string);

  const [pokeCat, setPokeCat] = useState(PokemonCategory.Baby as string);
  const [moveCat, setMoveCat] = useState(MoveCategory.Physical as string);

  const gens = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const aGens = ["All", "3", "4", "5", "6", "7", "8", "9"];

  const handlePick = (_: SyntheticEvent, newValue: string) => {
    setPick(newValue);
  };

  const getLabel = () => {
    let label = "";

    if (group === "gen") {
      label = `${gen === "All" ? "All the " : `Gen ${gen}`} ${pick}`;
    } else if (group === "type") {
      label = `${type}-Type ${pick}`;
    } else {
      if (pick === "Pokémon") {
        label =
          pokeCat === PokemonCategory.UltraBeast
            ? "Ultra Beasts"
            : `${pokeCat} ${pick}`;
      } else if (pick === "Moves") {
        label = `${moveCat} ${pick}`;
      }
    }

    setLabel(label);
  };

  const selectPokemon = () => {
    let pokemon: Pokemon[] = [];

    if (group === "gen") {
      pokemon = getPokemonByGen(gen);
    } else if (group === "type") {
      pokemon = getPokemonByType(type as Type);
    } else if (group === "cat") {
      pokemon = getPokemonByCat(pokeCat as PokemonCategory);
    }

    return pokemon;
  };

  const selectMoves = () => {
    let moves: Move[] = [];

    if (group === "gen") {
      moves = getMovesByGen(gen);
    } else if (group === "type") {
      moves = getMovesByType(type as Type);
    } else if (group === "cat") {
      moves = getMovesByCat(moveCat as MoveCategory);
    }

    return moves;
  };

  const selectItems = () => {
    getLabel();
    if (pick === "Pokémon") {
      setItems(selectPokemon());
    } else if (pick === "Moves") {
      setItems(selectMoves());
    } else {
      setItems(getAbilitiesByGen(gen));
    }
  };

  useEffect(() => {
    if (pick === "Abilities") {
      setGroup("gen");
    }
  }, [pick]);

  return (
    <Grid container spacing={1} display="flex" justifyContent="center">
      <Grid size={12}>
        <Tabs value={pick} onChange={handlePick} variant="fullWidth">
          <Tab value="Pokémon" label="Pokémon" />
          <Tab value="Moves" label="Moves" />
          <Tab value="Abilities" label="Abilities" />
        </Tabs>
      </Grid>

      {(pick === "Pokémon" || pick === "Moves") && (
        <>
          <Grid size={3}></Grid>
          <Grid size={6}>
            <PKRadio category={group} handleChange={setGroup} />
          </Grid>
          <Grid size={3}></Grid>
        </>
      )}

      {group === "gen" && (
        <PKSelect
          label="Generation"
          value={gen}
          handleChange={setGen}
          selectItems={pick === "Abilities" ? aGens : gens}
        />
      )}
      {group === "type" && (
        <PKSelect
          label="Type"
          value={type}
          handleChange={setType}
          selectItems={Object.keys(Type).filter((t: string) => t !== "Varies")}
        />
      )}
      {group === "cat" && (
        <PKSelect
          label="Category"
          value={pick === "Pokémon" ? pokeCat : moveCat}
          handleChange={pick === "Pokémon" ? setPokeCat : setMoveCat}
          selectItems={
            pick === "Pokémon"
              ? Object.keys(PokemonCategory)
              : Object.keys(MoveCategory)
          }
        />
      )}

      <PKButton label="Go!" handleClick={selectItems} />
    </Grid>
  );
};
