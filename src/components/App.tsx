import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { PokemonQuiz } from "./PokemonQuiz";
import { QuizSetup } from "./QuizSetup";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<QuizSetup />} />
        <Route path="/pokeQuiz" element={<PokemonQuiz />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
