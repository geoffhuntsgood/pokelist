import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const QuizCheckboxes = ({
  label,
  state,
  setStateFunc
}: {
  label: string;
  state: { [name: string]: boolean },
  setStateFunc: Dispatch<SetStateAction<any>>
}) => {
  const styles = {
    formGroup: {
      color: "darkblue",
      fontWeight: "bold !important",
      backgroundColor: "darkgoldenrod",
      margin: label === "Category" ? "1rem 1rem 1rem 4rem" : "1rem",
      padding: "0.5rem",
      border: "3px solid darkblue",
      borderRadius: "10px",
      overflow: "auto",
      maxHeight: "250px"
    },
    formLabel: {
      backgroundColor: "darkgoldenrod",
      border: "3px solid darkblue",
      borderRadius: "10px",
      color: "darkblue",
      padding: "2px",
      textTransform: "uppercase",
      "&.Mui-focused": {
        color: "darkblue",
      },
    },
    checkbox: {
      fontWeight: "bold",
      "&.Mui-checked": {
        color: "darkblue",
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStateFunc({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <FormControl sx={styles.formGroup} component="fieldset" variant="standard">
      <FormLabel component="legend" sx={{ ...styles.checkbox, ...styles.formLabel }}>{label}</FormLabel>
      <FormGroup>
        {Object.entries(state).map((item: [string, boolean]) =>
          <FormControlLabel
            key={item[0]}
            sx={styles.checkbox}
            label={<Typography sx={styles.checkbox}>{item[0]}</Typography>}
            control={<Checkbox sx={styles.checkbox} checked={item[1]} name={item[0]} onChange={(event) => handleChange(event)} />}
          />
        )}
      </FormGroup>
    </FormControl>
  );
};