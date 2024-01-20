import { Button, ButtonGroup, Grid } from "@mui/material";

export const QuizButtons = ({
  value,
  onChangeFunc,
  options
}: {
  value: string;
  onChangeFunc: (value: string) => void;
  options: { value: string; name: string }[];
}) => {
  const styles = {
    button: {
      fontWeight: "bold",
      color: "darkslateblue",
      border: "2px solid darkslateblue"
    },
    buttonOff: {
      backgroundColor: "goldenrod"
    },
    buttonOn: {
      backgroundColor: "deepskyblue"
    }
  };

  return (
    <Grid item xs={12}>
      <ButtonGroup size="large" variant="contained">
        {options.map((option) => (
          <Button
            style={{
              ...styles.button,
              ...(value === option.value ? styles.buttonOn : styles.buttonOff)
            }}
            key={option.value}
            onClick={() => onChangeFunc(option.value)}
          >
            {option.name}
          </Button>
        ))}
      </ButtonGroup>
    </Grid>
  );
};
