import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export const PKRadio = ({
  category,
  handleChange
}: {
  category: string;
  handleChange: Dispatch<SetStateAction<string>>;
}) => (
  <RadioGroup
    row
    value={category}
    onChange={(event: ChangeEvent<HTMLInputElement>) => {
      handleChange(event.target.value);
    }}
  >
    <FormControlLabel
      value="gen"
      control={<Radio size="small" />}
      label="Generation"
    />
    <FormControlLabel
      value="type"
      control={<Radio size="small" />}
      label="Type"
    />
    <FormControlLabel
      value="cat"
      control={<Radio size="small" />}
      label="Category"
    />
  </RadioGroup>
);
