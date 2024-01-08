import { Grid } from "@mui/material";
import { Pokemon } from "../classes/Pokemon";
import { TypeBadge } from "./TypeBadge";

const QuizTableSetup = ({ showItems, timedOut, pokemon }: { showItems: string[], timedOut: boolean, pokemon: Pokemon[] }) => {
  const headers = ["No.", "Name", "Type"];

  return (
    <table>
      <thead>
        <tr>{headers.map((header: string) => <th key={header}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {pokemon.map((pokemon: Pokemon) => (
          <tr key={pokemon.dexNumber}>
            <td>{pokemon.dexNumber}</td>
            <td className="big-table-item">
              {showItems.includes(pokemon.name) ? pokemon.displayName :
                timedOut && !showItems.includes(pokemon.name) ? <span className="red">{pokemon.displayName}</span> : ""
              }
            </td>
            <td>
              {!pokemon.type2 && <TypeBadge type1={pokemon.type} />}
              {pokemon.type2 && <TypeBadge type1={pokemon.type} type2={pokemon.type2} />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const QuizTable = ({ showItems, timedOut, data }: { showItems: string[], timedOut: boolean, data: { data1: Pokemon[], data2: Pokemon[], data3: Pokemon[] } }) => {
  const styles = {
    height: "65vh",
    overflow: "auto"
  };

  return (
    <Grid container spacing={0.3} sx={styles}>
      <Grid item xs={0.1}></Grid>
      <Grid item xs={3.8}>
        <QuizTableSetup showItems={showItems} timedOut={timedOut} pokemon={data.data1} />
      </Grid>
      <Grid item xs={0.2}></Grid>
      <Grid item xs={3.8}>
        <QuizTableSetup showItems={showItems} timedOut={timedOut} pokemon={data.data2} />
      </Grid>
      <Grid item xs={0.2}></Grid>
      <Grid item xs={3.8}>
        <QuizTableSetup showItems={showItems} timedOut={timedOut} pokemon={data.data3} />
      </Grid>
    </Grid>
  );
};
