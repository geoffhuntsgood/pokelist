import { Grid } from "@mui/material";
import { Pokemon } from "../classes/Pokemon";
import { TypeBadge } from "./TypeBadge";

export const QuizTable = ({
  showItems,
  timedOut,
  pokemon,
  lastPokemon
}: {
  showItems: string[];
  timedOut: boolean;
  pokemon: Pokemon[];
  lastPokemon: Pokemon;
}) => {
  const styles = {
    grid: {
      height: "65vh",
      overflow: "auto"
    },
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "darkslateblue",
      border: "2px solid darkslateblue"
    },
  };

  return (
    <Grid container spacing={0.3}>
      <Grid item xs={1.5}></Grid>
      <Grid item xs={4} sx={styles.grid}>
        <table>
          <thead>
            <tr>
              {["No.", "Name", "Type"].map((header: string) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pokemon.map((pokemon: Pokemon) => (
              <tr key={pokemon.dex}>
                <td>{pokemon.dex}</td>
                <td className="big-table-item">
                  {pokemon.simpleName && showItems.includes(pokemon.simpleName) ? (
                    <span>{pokemon.name}</span>
                  ) : timedOut && pokemon.simpleName && !showItems.includes(pokemon.simpleName) ? (
                    <span className="red">{pokemon.name}</span>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <TypeBadge type={pokemon.type} type2={pokemon.type2} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        {lastPokemon.simpleName &&
          <>
            <Grid container>
              {lastPokemon.simpleName === "nidoran" &&
                <>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <img src="/src/assets/pokemon/nidoranF.png" height="200" width="200" alt="female nidoran" />
                  </Grid>
                  <Grid item xs={6}>
                    <img src="/src/assets/pokemon/nidoranM.png" height="200" width="200" alt="male nidoran" />
                  </Grid>
                </>
              }
              {lastPokemon.simpleName !== "nidoran" &&
                <img src={`/src/assets/pokemon/${lastPokemon.simpleName}.png`} height="400" width="400" alt={lastPokemon.simpleName} />
              }
            </Grid>
            <Grid item xs={12} sx={styles.button}>
              {lastPokemon.simpleName === "nidoran" &&
                <>
                  <span>#29/#32 Nidoran♀/Nidoran♂ </span>
                  <TypeBadge type={lastPokemon.type} type2={lastPokemon.type2} />
                </>
              }
              {lastPokemon.simpleName !== "nidoran" &&
                <>
                  <span>{`#${lastPokemon.dex} ${lastPokemon.name} `}</span>
                  <TypeBadge type={lastPokemon.type} type2={lastPokemon.type2} />
                </>
              }
            </Grid>
          </>
        }
      </Grid>
    </Grid>
  );
};
