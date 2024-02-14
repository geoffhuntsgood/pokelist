import { AlternateForm, Pokemon } from "../classes";
import { Category, EggGroup, Type } from "../enums";
import { RegionName } from "../enums/RegionName";
import { gen1Pokemon } from "../resources/pokemon/gen1Pokemon";
import { gen2Pokemon } from "../resources/pokemon/gen2Pokemon";
import { gen3Pokemon } from "../resources/pokemon/gen3Pokemon";
import { gen4Pokemon } from "../resources/pokemon/gen4Pokemon";
import { gen5Pokemon } from "../resources/pokemon/gen5Pokemon";
import { gen6Pokemon } from "../resources/pokemon/gen6Pokemon";
import { gen7Pokemon } from "../resources/pokemon/gen7Pokemon";
import { gen8Pokemon } from "../resources/pokemon/gen8Pokemon";
import { gen9Pokemon } from "../resources/pokemon/gen9Pokemon";
import { sanitizeText } from "../utils/utils";

export const mapNamesToPokemon = (pokeList: Pokemon[]): Pokemon[] => {
  return pokeList.map((pokemon: Pokemon) => {
    pokemon.simpleName = sanitizeText(pokemon.name);
    pokemon.alternateForms?.forEach((form: AlternateForm) => {
      form.simpleName = sanitizeText(form.name);
    });
    pokemon.regionalVariants?.forEach((variant: AlternateForm) => {
      variant.simpleName = sanitizeText(variant.name);
    });
    pokemon.megaEvolutions?.forEach((mega: AlternateForm) => {
      mega.simpleName = sanitizeText(mega.name);
    });
    return pokemon;
  });
};

export const allPokemon: Pokemon[] = [
  ...gen1Pokemon(),
  ...gen2Pokemon(),
  ...gen3Pokemon(),
  ...gen4Pokemon(),
  ...gen5Pokemon(),
  ...gen6Pokemon(),
  ...gen7Pokemon(),
  ...gen8Pokemon(),
  ...gen9Pokemon()
];

export const getByGen = (gen: number): Pokemon[] => {
  switch (gen) {
    case 1:
      return gen1Pokemon();
    case 2:
      return gen2Pokemon();
    case 3:
      return gen3Pokemon();
    case 4:
      return gen4Pokemon();
    case 5:
      return gen5Pokemon();
    case 6:
      return gen6Pokemon();
    case 7:
      return gen7Pokemon();
    case 8:
      return gen8Pokemon();
    case 9:
      return gen9Pokemon();
    default:
      return [];
  }
};

export const getByType = (type: Type, pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => pokemon.type === type || pokemon.type2 === type);
};

export const getByCategory = (category: Category, pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => pokemon.category === category || pokemon.category?.includes(category));
};

export const getByEggGroup = (eggGroup: EggGroup, pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => pokemon.eggGroup1 === eggGroup || pokemon.eggGroup2 === eggGroup);
};

export const getHasAlternateForm = (pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => pokemon.alternateForms);
};

export const getHasRegionalVariant = (region?: RegionName, pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => {
    return pokemon.regionalVariants?.some((variant: AlternateForm) => {
      return region ? variant.name.includes(region) : true;
    });
  });
};

export const getHasMegaEvolution = (pokeList: Pokemon[] = allPokemon): Pokemon[] => {
  return pokeList.filter((pokemon: Pokemon) => pokemon.megaEvolutions);
};
