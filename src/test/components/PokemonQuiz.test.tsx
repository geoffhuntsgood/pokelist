import { render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import { PokemonQuiz } from "../../components/PokemonQuiz";
import { allPokemonList } from "../../resources/pokemon/pokemonLists";

const mockNavigate = vi.fn();
const mockLocation = { state: { displayText: "Test", pokemon: allPokemonList.slice(0, 10) } };

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation
}));

// TODO: Write PokemonQuiz test cases
describe("PokemonQuiz component rendering", () => {
  test("Initialization", () => {
    render(<PokemonQuiz />);
  });
});
