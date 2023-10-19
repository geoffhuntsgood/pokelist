import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const QuizDropdown = ({
  labelId,
  label,
  value,
  onChangeFunc,
  options
}: {
  labelId: string,
  label: string,
  value: string,
  onChangeFunc: Function,
  options: { value: string, name: string }[]
}) => (
  <Grid item xs={12}>
    <FormControl className="form">
      <InputLabel className="input-label" id={labelId}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        label={label}
        value={value}
        variant="outlined"
        inputProps={{ className: "dropdown" }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#1A2F44",
              color: "white"
            },
          },
        }}
        onChange={(event: SelectChangeEvent) => onChangeFunc(event.target.value as string)}
      >
        {
          options.map((option) => {
            return <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  </Grid>
);
