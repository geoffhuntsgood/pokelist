import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Ability, Move, Pokemon } from "../classes";
import { getMoveTypeString, getTypeString } from "../utils/utils";

class QuizProps {
  constructor(
    public headers: string[],
    public showItems: string[],
    public showDescriptions?: boolean,
    public pokemon?: {
      data1: Pokemon[],
      data2: Pokemon[],
      data3: Pokemon[]
    },
    public moves?: {
      data1: Move[],
      data2: Move[],
      data3: Move[]
    },
    public abilities?: Ability[],
    public data?: Pokemon[] | Move[] | Ability[]
  ) { }
}

const QuizTableSetup = (props: QuizProps) => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!timedOut) {
      setTimedOut(document.querySelector(".timer")?.textContent === "Time's up!");
    }
  });

  return (
    <table>
      <thead>
        <tr>{props.headers.map((header: string) => <th key={header}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {props.pokemon && props.data && (props.data as Pokemon[]).map((pokemon: Pokemon) => (
          <tr key={pokemon.dexNumber}>
            <td>{pokemon.dexNumber}</td>
            <td className="big-table-item">
              {props.showItems.includes(pokemon.name) ? pokemon.displayName :
                timedOut && !props.showItems.includes(pokemon.name) ? <span className="red">{pokemon.displayName}</span> :
                  ""
              }
            </td>
            <td>{getTypeString(pokemon)}</td>
          </tr>
        ))}
        {props.moves && props.data && (props.data as Move[]).map((move: Move) => (
          <tr key={move.name}>
            <td>{getMoveTypeString(move)}</td>
            <td className={props.showDescriptions ? "med-table-item" : "big-table-item"}>
              {props.showItems.includes(move.name) ? move.displayName :
                timedOut && !props.showItems.includes(move.name) ? <span className="red">{move.displayName}</span> :
                  ""
              }
            </td>
            <td>{move.attackType}</td>
            {props.showDescriptions && <td className="big-table-item">{move.description}</td>}
          </tr>
        ))}
        {props.abilities && props.data && (props.data as Ability[]).map((ability: Ability) => (
          <tr key={ability.name}>
            <td>{ability.generation}</td>
            <td className="med-table-item">
              {props.showItems.includes(ability.name) ? ability.displayName :
                timedOut && !props.showItems.includes(ability.name) ? <span className="red">{ability.displayName}</span> :
                  ""
              }
            </td>
            <td>{ability.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const QuizTable = (props: QuizProps) => (
  <Grid container spacing={0.3} className="quiz-table">
    <Grid item xs={1.5}></Grid>
    {props.pokemon &&
      <>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.pokemon?.data1} />
        </Grid>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.pokemon?.data2} />
        </Grid>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.pokemon?.data3} />
        </Grid>
        <Grid item xs={1.5}></Grid>
      </>
    }
    {props.moves && props.showDescriptions &&
      <Grid item xs={9} className="quiz-table-column">
        <QuizTableSetup {...props} data={props.moves.data1.concat(props.moves.data2).concat(props.moves.data3)} />
      </Grid>
    }
    {props.moves && !props.showDescriptions &&
      <>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.moves?.data1} />
        </Grid>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.moves?.data2} />
        </Grid>
        <Grid item xs={3} className="quiz-table-column">
          <QuizTableSetup {...props} data={props.moves?.data3} />
        </Grid>
        <Grid item xs={1.5}></Grid>
      </>
    }
    {props.abilities &&
      <Grid item xs={9} className="quiz-table-column">
        <QuizTableSetup {...props} data={props.abilities} />
      </Grid>
    }
  </Grid>
);
