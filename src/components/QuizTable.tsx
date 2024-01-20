import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Pokemon } from "../classes/Pokemon";
import { TypeBadge } from "./TypeBadge";

const QuizTableSetup = ({
  showItems,
  timedOut,
  pokemon
}: {
  showItems: string[];
  timedOut: boolean;
  pokemon: Pokemon[];
}) => {
  const headers = ["No.", "Name", "Type"];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pokemon.map((pokemon: Pokemon) => (
          <tr key={pokemon.dex}>
            <td>{pokemon.dex}</td>
            <td className="big-table-item">
              {showItems.includes(pokemon.simpleName) ? (
                pokemon.name
              ) : timedOut && !showItems.includes(pokemon.simpleName) ? (
                <span className="red">{pokemon.name}</span>
              ) : (
                ""
              )}
            </td>
            <td>
              {!pokemon.type2 && <TypeBadge type1={pokemon.type} />}
              {pokemon.type2 && (
                <TypeBadge type1={pokemon.type} type2={pokemon.type2} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const QuizTable = ({
  showItems,
  timedOut,
  data
}: {
  showItems: string[];
  timedOut: boolean;
  data: Pokemon[];
}) => {
  const [divider, setDivider] = useState(0);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    if (data.length > 10 && data.length <= 200) {
      setDivider(Math.ceil(data.length / 2));
      setColumns(2);
    } else if (data.length > 200) {
      setDivider(Math.ceil(data.length / 3));
      setColumns(3);
    }
  }, [data.length])

  const styles = {
    height: "65vh",
    overflow: "auto"
  };

  return (
    <Grid container spacing={0.3} sx={styles}>
      {columns === 1 &&
        <>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data}
            />
          </Grid>
        </>
      }
      {columns === 2 &&
        <>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data.slice(0, divider)}
            />
          </Grid>
          <Grid item xs={0.2}></Grid>
          <Grid item xs={3}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data.slice(divider + 1, data.length)}
            />
          </Grid>
        </>
      }
      {columns === 3 &&
        <>
          <Grid item xs={0.1}></Grid>
          <Grid item xs={3.8}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data.slice(0, divider)}
            />
          </Grid>
          <Grid item xs={0.2}></Grid>
          <Grid item xs={3.8}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data.slice(divider + 1, divider * 2)}
            />
          </Grid>
          <Grid item xs={0.2}></Grid>
          <Grid item xs={3.8}>
            <QuizTableSetup
              showItems={showItems}
              timedOut={timedOut}
              pokemon={data.slice((divider * 2) + 1, data.length)}
            />
          </Grid>
        </>
      }
    </Grid>
  );
};
