import { Route, Routes } from "react-router-dom";
import { AbilityQuiz } from "./AbilityQuiz";
import { MoveQuiz } from "./MoveQuiz";
import { PokemonQuiz } from "./PokemonQuiz";
import { QuizSetup } from "./QuizSetup";

const App = () => (
  <Routes>
    <Route path="/" element={<QuizSetup />} />
    <Route path="/quiz/pokemon" element={<PokemonQuiz />} />
    <Route path="/quiz/moves" element={<MoveQuiz />} />
    <Route path="/quiz/abilities" element={<AbilityQuiz />} />
  </Routes>
);

export default App;
