import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { allPokemon } from "../../api/pokemonApi";
import { Pokemon } from "../../classes";
import { QuizTable } from "../../components/QuizTable";
import { EggGroup, PokemonName, Type } from "../../enums";


describe("QuizTable component rendering", () => {
  const typeCheck = `${Type.Grass}${Type.Poison}`;
  const defaultPokemon = new Pokemon(PokemonName.Ditto, 0, Type.Normal, EggGroup.Amorphous);

  test("Initialization with one shown item", () => {
    render(<QuizTable showItems={["bulbasaur"]} timedOut={false} pokemon={allPokemon.slice(0, 2)} lastPokemon={allPokemon[0]} />);
    expect(screen.getAllByRole("table")).toHaveLength(1);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(6);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual(PokemonName.Bulbasaur);
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(cells[3].textContent).toEqual("2");
    expect(cells[4].textContent).toEqual("");
    expect(cells[5].textContent).toEqual(typeCheck);
    expect(screen.getByAltText("bulbasaur")).toBeInTheDocument();
  });

  test("Initialization with special case: Nidoran", () => {
    render(<QuizTable showItems={["nidoran"]} timedOut={false} pokemon={allPokemon.slice(0, 2)} lastPokemon={allPokemon[28]} />);
    expect(screen.getAllByRole("table")).toHaveLength(1);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(6);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual("");
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(screen.getByAltText("female nidoran")).toBeInTheDocument();
    expect(screen.getByAltText("male nidoran")).toBeInTheDocument();
  });

  test("Initialization with no shown items and timed out", () => {
    render(<QuizTable showItems={[]} timedOut={true} pokemon={allPokemon.slice(0, 2)} lastPokemon={defaultPokemon} />);
    expect(screen.getAllByRole("table")).toHaveLength(1);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(6);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual(PokemonName.Bulbasaur);
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(cells[3].textContent).toEqual("2");
    expect(cells[4].textContent).toEqual(PokemonName.Ivysaur);
    expect(cells[5].textContent).toEqual(typeCheck);
  });
});
