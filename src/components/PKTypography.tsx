import { Typography } from "@mui/material";

export const PKTypography = ({
  text
}: {
  text: string;
}) => (
  <Typography variant="h2" color="textSecondary">
    {text}
  </Typography>
);
