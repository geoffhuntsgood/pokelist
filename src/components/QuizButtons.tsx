import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { motion } from "framer-motion";

export const QuizButtons = ({
  state,
  setStateFunc,
  options
}: {
  state: string,
  setStateFunc: Function,
  options: string[]
}) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setStateFunc(value);
  };

  const styles = {
    button: {
      fontWeight: "bold",
      backgroundColor: "goldenrod",
      color: "navy",
      border: "2px solid navy",
      padding: "6px",
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "navy",
        "&:hover": {
          backgroundColor: "blue"
        }
      },
      "&:hover": {
        color: "white",
        backgroundColor: "blue"
      },
    },
  };

  const pageMotion = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 50, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Grid item xs={12}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <ToggleButtonGroup
          value={state}
          exclusive
          onChange={handleChange}
        >
          {options.map((option: string) => (
            <ToggleButton key={option} sx={styles.button} value={option}>{option}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </motion.div>
    </Grid>

  );
};
