import { useLocation } from "react-router-dom";
import { abilityList } from "../resources/abilityList";
import { Quiz } from "./Quiz";

export const AbilityQuiz = () => {
  const state = useLocation().state;
  const category = state.category;
  const subCategory = state.subCategory;

  const headers = ["Generation", "Name", "Description"];

  const getAbilities = (category: string) => {
    switch (category) {
      case "all":
        return abilityList;
      case "generation":
        return abilityList.filter((ability) => ability.generation === parseInt(category));
      default:
        return [];
    }
  };

  const getCategoryString = () => {
    switch (category) {
      case "all":
        return "all the abilities!";
      case "generation":
        return `Gen ${subCategory} Abilities`;
      default:
        return "Y'all messed up";
    };
  };

  return (
    <Quiz type="abilities" headers={headers} getItems={getAbilities} getCategoryString={getCategoryString} />
  );
};
