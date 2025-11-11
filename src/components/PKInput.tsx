import { TextField } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useReward } from "react-rewards";
import { Ability, Move, Pokemon } from "../classes";

export const PKInput = ({
  label,
  items,
  foundItems,
  setFoundItems,
  disabled
}: {
  label: string;
  items: Pokemon[] | Move[] | Ability[];
  foundItems: string[];
  setFoundItems: Dispatch<SetStateAction<string[]>>;
  disabled: boolean;
}) => {
  const [input, setInput] = useState("");

  const compareInput = (newVal: string) => {
    setInput(newVal);
    const add = [...foundItems];
    const sanitized = newVal
      .replace(new RegExp(/é/g), "e")
      .replace(new RegExp(/[^A-Za-z0-9]/g), "")
      .toLowerCase();

    items
      .filter((i: Pokemon | Move | Ability) => {
        return i.name === sanitized;
      })
      .forEach((i: Pokemon | Move | Ability) => {
        if (!foundItems.includes(i.displayName)) {
          setInput("");
          add.push(i.displayName);
        }

        if (add.length > foundItems.length) {
          setFoundItems(add);
        }
      });
  };

  const rewardOptions = {
    lifetime: 5000,
    spread: 180,
    elementCount: 50,
    zIndex: 9999,
    emoji: ["🔴", "⚪"]
  };

  const { reward: reward1 } = useReward("finished", "emoji", rewardOptions);
  const { reward: reward2 } = useReward("done", "emoji", rewardOptions);

  useEffect(() => {
    if (foundItems.length === items.length) {
      reward1();
      reward2();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundItems]);

  return (
    <>
      <span id="finished" />
      <TextField
        autoFocus
        label={label}
        variant="filled"
        value={input}
        disabled={disabled}
        helperText={
          <span>
            {foundItems.length} out of {items.length} found
          </span>
        }
        onChange={(event) => compareInput(event.target.value)}
      />
      <span id="done" />
    </>
  );
};
