import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Pokemon } from "../../classes/Pokemon";
import { QuizSetup } from "../../components/QuizSetup";
import { Category, EggGroup, TypeName } from "../../enums";
import { gen2Pokemon } from "../../resources/pokemon/gen2Pokemon";
import {
  allPokemonList,
  getNonEvolvers
} from "../../resources/pokemon/pokemonLists";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate
}));

describe("QuizSetup component rendering", () => {
  const startText = "Let's Go!";
  const otherText = "Include other categories? (Legendaries, Mythicals, etc.)";

  const expectPayload = (displayText: string, pokemon: Pokemon[]) => {
    expect(mockNavigate).toHaveBeenCalledWith("/quiz/pokemon", {
      state: { displayText, pokemon }
    });
  };

  beforeEach(() => {
    render(<QuizSetup />);
  });

  describe("Item selection", () => {
    test("Select all", () => {
      const categoryButtons = screen.getAllByRole("button");
      expect(categoryButtons).toHaveLength(5);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(categoryButtons[0]);
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select category with checkbox", () => {
      fireEvent.click(screen.getByText("Category"));
      expect(screen.getAllByRole("button")).toHaveLength(14);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Non-Evolving"));
      expect(screen.getByText(startText)).toBeInTheDocument();
      expect(screen.getByText(otherText)).toBeInTheDocument();
      fireEvent.click(screen.getByRole("checkbox"));
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    test("Select generation", () => {
      fireEvent.click(screen.getByText("Generation"));
      expect(screen.getAllByRole("button")).toHaveLength(14);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("4"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select type", () => {
      fireEvent.click(screen.getByText("Type"));
      expect(screen.getAllByRole("button")).toHaveLength(23);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Dragon"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select egg group", () => {
      fireEvent.click(screen.getByText("Egg Group"));
      expect(screen.getAllByRole("button")).toHaveLength(20);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Monster"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });
  });

  describe("Data submission", () => {
    test("Submit all Pokemon", () => {
      fireEvent.click(screen.getByText("All of them!"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Gotta name 'em all!", allPokemonList);
    });

    test("Submit category", () => {
      fireEvent.click(screen.getByText("Category"));
      fireEvent.click(screen.getByText("Fossil"));
      fireEvent.click(screen.getByText(startText));
      const fossils = allPokemonList.filter(
        (p) =>
          p.category === Category.Fossil ||
          p.category?.includes(Category.Fossil)
      );
      expectPayload("Name the Fossil Pokémon!", fossils);
    });

    test("Submit category with non-evolving sub-selection", () => {
      fireEvent.click(screen.getByText("Category"));
      fireEvent.click(screen.getByText("Non-Evolving"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Non-Evolving Pokémon!", getNonEvolvers(false));
    });

    test("Submit generation", () => {
      fireEvent.click(screen.getByText("Generation"));
      fireEvent.click(screen.getByText("2"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Generation 2 Pokémon!", gen2Pokemon);
    });

    test("Submit type", () => {
      fireEvent.click(screen.getByText("Type"));
      fireEvent.click(screen.getByText("Bug"));
      fireEvent.click(screen.getByText(startText));
      const bugs = allPokemonList.filter(
        (p) => p.type === TypeName.Bug || p.type2 === TypeName.Bug
      );
      expectPayload("Name the Bug-Type Pokémon!", bugs);
    });

    test("Submit egg group", () => {
      fireEvent.click(screen.getByText("Egg Group"));
      fireEvent.click(screen.getByText("Monster"));
      fireEvent.click(screen.getByText(startText));
      const monsterEggs = allPokemonList.filter((p) =>
        p.eggGroups.includes(EggGroup.Monster)
      );
      expectPayload("Name Pokémon in the Monster Egg Group!", monsterEggs);
    });
  });
});
