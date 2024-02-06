import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { allPokemon } from "../../api/pokemonApi";
import { QuizTable } from "../../components/QuizTable";
import { PokemonName, Type } from "../../enums";


describe("QuizTable component rendering", () => {
  const typeCheck = `${Type.Grass}${Type.Poison}`;

  test("Initialization with less than 10 items and one shown item", () => {
    render(<QuizTable showItems={["bulbasaur"]} timedOut={false} data={allPokemon.slice(0, 2)} />);
    expect(screen.getAllByRole("table")).toHaveLength(1);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(6);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual(PokemonName.Bulbasaur);
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(cells[3].textContent).toEqual("2");
    expect(cells[4].textContent).toEqual("");
    expect(cells[5].textContent).toEqual(typeCheck);
  });

  test("Initialization with less than 200 items", () => {
    render(<QuizTable showItems={[]} timedOut={false} data={allPokemon.slice(0, 151)} />);
    expect(screen.getAllByRole("table")).toHaveLength(2);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(450);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual("");
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(cells[447].textContent).toEqual("151");
    expect(cells[448].textContent).toEqual("");
    expect(cells[449].textContent).toEqual(Type.Psychic);
  });

  test("Initialization with more than 200 items and timed out", () => {
    render(<QuizTable showItems={[]} timedOut={true} data={allPokemon.slice(0, 251)} />);
    expect(screen.getAllByRole("table")).toHaveLength(3);
    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(747);
    expect(cells[0].textContent).toEqual("1");
    expect(cells[1].textContent).toEqual(PokemonName.Bulbasaur);
    expect(cells[2].textContent).toEqual(typeCheck);
    expect(cells[744].textContent).toEqual("251");
    expect(cells[745].textContent).toEqual(PokemonName.Celebi);
    expect(cells[746].textContent).toEqual(`${Type.Psychic}${Type.Grass}`);
  });
});
