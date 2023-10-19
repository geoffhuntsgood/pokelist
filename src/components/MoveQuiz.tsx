import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AttackType, TypeName } from "../enums";
import { allMovesList } from "../resources/moves/allMovesList";
import { Quiz } from "./Quiz";

export const MoveQuiz = () => {
  const state = useLocation().state;
  const category = state.category;
  const subCategory = state.subCategory;

  const [headers, setHeaders] = useState(["Type", "Name", "Attack Type"]);

  useEffect(() => {
    if (state.showDescriptions && !headers.includes("Description")) {
      setHeaders([...headers, "Description"]);
    }
  }, []);

  const getMoves = (category: string) => {
    switch (category) {
      case "all":
        return allMovesList;
      case "signature":
        return allMovesList.filter((move) => move.signatureOf !== null);
      case "generation":
        return allMovesList.filter((move) => move.generation === parseInt(subCategory));
      case "type":
        return allMovesList.filter((move) => move.type === subCategory as TypeName);
      case "attackType":
        return allMovesList.filter((move) => move.attackType === subCategory as AttackType);
      default:
        return [];
    }
  };

  const getCategoryString = () => {
    switch (category) {
      case "all":
        return "all the moves";
      case "signature":
        return "all (current/previous) signature moves";
      case "generation":
        return `Generation ${subCategory} moves`;
      case "type":
        return `${subCategory}-type moves`;
      case "attackType":
        return `${subCategory === AttackType.ZMove ? "Z-Moves" : subCategory} moves`;
      default:
        return "Y'all messed up";
    };
  };

  return (
    <Quiz type="moves" headers={headers} getItems={getMoves} getCategoryString={getCategoryString} />
  );
}
