import { Typography } from "@mui/material";

export const PKTypography = ({
  text,
  header
}: {
  text: string;
  header?: boolean;
}) => (
  <Typography variant={header ? "h1" : "h2"} color="textSecondary">
    {text}
  </Typography>
);
