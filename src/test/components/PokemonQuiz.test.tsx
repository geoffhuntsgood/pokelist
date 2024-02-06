import { render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import { allPokemon } from "../../api/pokemonApi";
import { PokemonQuiz } from "../../components/PokemonQuiz";

const mockNavigate = vi.fn();
const mockLocation = { state: { displayText: "Test", pokemon: allPokemon.slice(0, 10) } };

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
