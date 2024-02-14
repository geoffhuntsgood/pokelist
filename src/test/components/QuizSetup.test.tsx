import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as api from "../../api/pokemonApi";
import { Pokemon } from "../../classes/Pokemon";
import { QuizSetup } from "../../components/QuizSetup";
import { Category, EggGroup, Type } from "../../enums";
import { gen2Pokemon } from "../../resources/pokemon/gen2Pokemon";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate
}));

describe("QuizSetup component rendering", () => {
  const startText = "Let's Go!";

  const expectPayload = (displayText: string, pokemon: Pokemon[]) => {
    expect(mockNavigate).toHaveBeenCalledWith("/pokeQuiz", {
      state: { pokemon, displayText }
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
      expect(screen.getAllByRole("button")).toHaveLength(14);
      expect(screen.queryByText(startText)).toBeNull();
      fireEvent.click(screen.getByText("Fossil"));
      expect(screen.getByText(startText)).toBeInTheDocument();
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
      expectPayload("Gotta name 'em all!", api.allPokemon);
    });

    test("Submit category", () => {
      fireEvent.click(screen.getByText("Category"));
      fireEvent.click(screen.getByText("Fossil"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Fossil Pokémon!", api.getByCategory(Category.Fossil));
    });

    test("Submit category with Ultra Beast text", () => {
      fireEvent.click(screen.getByText("Category"));
      fireEvent.click(screen.getByText("Ultra Beast"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name the Ultra Beasts!", api.getByCategory(Category.UltraBeast));
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
      expectPayload("Name the Bug-Type Pokémon!", api.getByType(Type.Bug));
    });

    test("Submit egg group", () => {
      fireEvent.click(screen.getByText("Egg Group"));
      fireEvent.click(screen.getByText("Monster"));
      fireEvent.click(screen.getByText(startText));
      expectPayload("Name Pokémon in the Monster Egg Group!", api.getByEggGroup(EggGroup.Monster));
    });
  });
});
