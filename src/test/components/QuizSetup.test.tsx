import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { allPokemon, getByCategory, getByEggGroup, getBySpecialCategory, getByType } from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { QuizSetup } from "../../components/QuizSetup";
import { Category, EggGroup, SpecialCategory, Type } from "../../enums";
import { gen2Pokemon } from "../../resources/pokemon/gen2Pokemon";

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
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("All of them!"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select category", () => {
      fireEvent.click(screen.getByText("Category"));
      expect(screen.getAllByRole("button")).toHaveLength(11);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Fossil"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select category with non-evolving checkbox", () => {
      fireEvent.click(screen.getByText("Category"));
      expect(screen.getAllByRole("button")).toHaveLength(11);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Non-Evolving"));
      expect(screen.getByText(startText)).toBeInTheDocument();
      expect(screen.getByText(otherText)).toBeInTheDocument();
      const selectNonEvolving = screen.getAllByRole("checkbox")[0];
      fireEvent.click(selectNonEvolving);
      expect(selectNonEvolving).toBeChecked();
    });

    test("Select special category", () => {
      fireEvent.click(screen.getByText("Special Category"));
      expect(screen.getAllByRole("button")).toHaveLength(10),
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Legendary"));
      expect(screen.getByText(startText)).toBeInTheDocument();
      expect(screen.queryByText(otherText)).toBeNull();
    });

    test("Select generation", () => {
      fireEvent.click(screen.getByText("Generation"));
      expect(screen.getAllByRole("button")).toHaveLength(15);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("4"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select type", () => {
      fireEvent.click(screen.getByText("Type"));
      expect(screen.getAllByRole("button")).toHaveLength(24);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Dragon"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });

    test("Select egg group", () => {
      fireEvent.click(screen.getByText("Egg Group"));
      expect(screen.getAllByRole("button")).toHaveLength(21);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Monster"));
      expect(screen.getByText(startText)).toBeInTheDocument();
    });
  });

  describe("Data submission", () => {
    test("Submit all Pokemon", () => {
      fireEvent.click(screen.getByText("All of them!"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Gotta name 'em all!", allPokemon);
    });

    test("Submit category", () => {
      fireEvent.click(screen.getByText("Category"));
      fireEvent.click(screen.getByText("Fossil"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Fossil Pokémon!", getByCategory(Category.Fossil));
    });

    test("Submit special category", () => {
      fireEvent.click(screen.getByText("Special Category"));
      fireEvent.click(screen.getByText("Paradox"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Paradox Pokémon!", getBySpecialCategory(SpecialCategory.Paradox));
    });

    test("Submit generation", () => {
      fireEvent.click(screen.getByText("Generation"));
      fireEvent.click(screen.getByText("2"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Generation 2 Pokémon!", gen2Pokemon());
    });

    test("Submit type", () => {
      fireEvent.click(screen.getByText("Type"));
      fireEvent.click(screen.getByText("Bug"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Bug-Type Pokémon!", getByType(Type.Bug, allPokemon));
    });

    test("Submit egg group", () => {
      fireEvent.click(screen.getByText("Egg Group"));
      fireEvent.click(screen.getByText("Monster"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name Pokémon in the Monster Egg Group!", getByEggGroup(EggGroup.Monster, allPokemon));
    });
  });
});
