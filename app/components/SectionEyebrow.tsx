import { Typography } from "@mui/material";

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: "primary.main",
        fontWeight: 800,
        letterSpacing: "0.16em",
        display: "block",
        fontSize: "0.72rem",
      }}
    >
      {children}
    </Typography>
  );
}
