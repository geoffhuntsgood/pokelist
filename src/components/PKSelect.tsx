import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const PKSelect = ({
  label,
  value,
  handleChange,
  selectItems
}: {
  label: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
  selectItems: string[];
}) => {
  const styles = {
    menu: {
      MenuProps: {
        MenuListProps: {
          sx: {
            color: "white",
            backgroundColor: "#212121"
          }
        },
        PaperProps: {
          style: {
            maxHeight: 200
          }
        }
      }
    }
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(event: SelectChangeEvent) => {
          handleChange(event.target.value);
        }}
        inputProps={styles.menu}
      >
        {selectItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
