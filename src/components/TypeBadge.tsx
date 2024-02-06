import { Types } from "../classes";

export const TypeBadge = ({
  type
}: {
  type: Types
}) => {
  const colors = {
    Bug: "#A8B81F",
    Dark: "#705848",
    Dragon: "#7038F8",
    Electric: "#F9D080",
    Fairy: "#EE99AC",
    Fighting: "#C03028",
    Fire: "#F07F30",
    Flying: "#A890F0",
    Ghost: "#705998",
    Grass: "#78C850",
    Ground: "#E0C068",
    Ice: "#98D8D8",
    Normal: "#A8A878",
    Poison: "#A040A1",
    Psychic: "#F85988",
    Rock: "#B8A038",
    Steel: "#B9B7D0",
    Water: "#6891F0"
  };

  const styles = {
    badge: {
      color: "white",
      borderRadius: "10px",
      fontSize: "14px",
      padding: "2px 8px",
      margin: "0 2px",
      width: "49%"
    },
    primary: {
      backgroundColor: colors[type.type1]
    },
    secondary: {
      backgroundColor: type.type2 ? colors[type.type2] : "white"
    }
  };

  return (
    <>
      <span style={{ ...styles.badge, ...styles.primary }}>{type.type1}</span>
      {type.type2 && (
        <span style={{ ...styles.badge, ...styles.secondary }}>{type.type2}</span>
      )}
    </>
  );
};
