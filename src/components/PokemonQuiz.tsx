import { useLocation } from "react-router-dom";
import { Category, EggGroupName, TypeName } from "../enums";
import { allPokemonList } from "../resources/pokemon/allPokemonList";
import { Quiz } from "./Quiz";

export const PokemonQuiz = () => {
  const state = useLocation().state;
  const category = state.category;
  const subCategory = state.subCategory;

  const headers = ["Dex #", "Name", "Type"];

  const getPokemon = (category: string) => {
    switch (category) {
      case "all":
        return allPokemonList;
      case "category":
        return allPokemonList.filter((pokemon) => pokemon.category === subCategory as Category);
      case "generation":
        return allPokemonList.filter((pokemon) => pokemon.generation === parseInt(subCategory));
      case "type":
        return allPokemonList.filter((pokemon) => {
          const type = subCategory as TypeName;
          return pokemon.type === type || pokemon.type.includes(type) || pokemon.type2 === type || pokemon.type2?.includes(type);
        });
      case "eggGroup":
        return allPokemonList.filter((pokemon) => {
          const eggGroup = subCategory as EggGroupName;
          return pokemon.eggGroups.group1 === eggGroup || pokemon.eggGroups.group2 === eggGroup;
        });
      default:
        return [];
    }
  };

  const getCategoryString = () => {
    switch (category) {
      case "all":
        return "all the Pokémon";
      case "category":
        return `${category}: ${subCategory}`;
      case "generation":
        return `Generation ${subCategory} Pokémon`;
      case "type":
        return `${subCategory}-type Pokémon`;
      case "eggGroup":
        return `Pokémon in the ${subCategory} egg group`;
      default:
        return "Y'all messed up";
    };
  };

  return (
    <Quiz type="pokemon" headers={headers} getItems={getPokemon} getCategoryString={getCategoryString} />
  );
};
