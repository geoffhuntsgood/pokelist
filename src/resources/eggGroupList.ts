import { EggGroup } from "../classes";
import { EggGroupName } from "../enums";

export const eggGroupList: EggGroup[] = [
  {
    name: EggGroupName.Monster,
    description: "Pokémon in this group are saurian/kaiju-like in appearance and nature."
  },
  {
    name: EggGroupName.Water1,
    description: "Pokémon in this group are amphibious in nature."
  },
  {
    name: EggGroupName.Bug,
    description: "Pokémon in this group are insectoid (bug-like) in appearance."
  },
  {
    name: EggGroupName.Flying,
    description: "Pokémon in this group are avian (birdlike) in appearance."
  },
  {
    name: EggGroupName.Field,
    description: `The largest group, Pokémon here are terrestrial in nature. In Stadium 2, this Egg Group was known as "Ground".`
  },
  {
    name: EggGroupName.Fairy,
    description: "Pokémon in this group are petite and considered very cute."
  },
  {
    name: EggGroupName.Grass,
    description: `Pokémon in this group are plantlike in appearance. In Stadium 2, this Egg Group was known as "Plant".`
  },
  {
    name: EggGroupName.HumanLike,
    description: `Pokémon in this group are fully bipedal. In Stadium 2, this Egg Group was known as "Humanshape".`
  },
  {
    name: EggGroupName.Water3,
    description: "Pokémon in this group resemble aquatic invertebrates."
  },
  {
    name: EggGroupName.Mineral,
    description: "Pokémon in this group are inorganic in nature."
  },
  {
    name: EggGroupName.Amorphous,
    description: `Pokémon in this group are amorphous, having no definite form. In Stadium 2, this Egg Group was known as "Indeterminate".`
  },
  {
    name: EggGroupName.Water2,
    description: "Pokémon in this group are piscine (fishlike) in appearance."
  },
  {
    name: EggGroupName.Ditto,
    description:
      "As the name implies, Ditto is the only Pokémon in this group, and is capable of breeding with all other Pokémon (regardless of gender) aside from those in the No Eggs Discovered and Ditto groups."
  },
  {
    name: EggGroupName.Dragon,
    description: "Pokémon in this group are draconic in appearance."
  },
  {
    name: EggGroupName.NoEggs,
    description: `Pokémon in this group are unable to breed. In Stadium 2, this Egg Group was known as "No eggs".`
  }
];
