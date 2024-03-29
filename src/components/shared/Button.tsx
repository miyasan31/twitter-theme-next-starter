import type { FC, MouseEventHandler, ReactNode } from "react";

import { styled } from "~/libs/stiches";

export const StitchesButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  borderRadius: 99999,
  fontWeight: 500,
  cursor: "pointer",

  variants: {
    under: {
      true: { "&:hover": { textDecoration: "underline" } },
    },

    size: {
      base: { fontSize: "0.9rem", height: "2rem", paddingX: "1rem" },
      lg: { fontSize: "1rem", height: "2.5rem", paddingX: "1.75rem" },
      xl: {
        fontSize: "1.1rem",
        height: "3.25rem",
        paddingX: "5rem",
      },
    },

    isOutline: {
      primary: {
        color: "$primary9",
        backgroundColor: "$slate2",
        border: "1px solid $primary9",
        boxSizing: "border-box",
        "&:hover": { backgroundColor: "$primary4" },
      },
      red: {
        color: "$red9",
        backgroundColor: "$slate2",
        border: "1px solid $red9",
        boxSizing: "border-box",
        "&:hover": { backgroundColor: "$red4" },
      },
      slate: {
        color: "$slate12",
        backgroundColor: "$slate2",
        border: "1px solid $slate9",
        boxSizing: "border-box",
        "&:hover": { backgroundColor: "$slate4" },
      },
    },

    isGhost: {
      primary: {
        color: "$primary9",
        backgroundColor: "$slate2",
        "&:hover": { backgroundColor: "$primary4" },
      },
      red: {
        color: "$red9",
        backgroundColor: "$slate2",
        "&:hover": { backgroundColor: "$red4" },
      },
      slate: {
        color: "$slate12",
        backgroundColor: "$slate2",
        "&:hover": { backgroundColor: "$slate4" },
      },
    },

    color: {
      primary: {
        color: "white",
        backgroundColor: "$primary9",
        "&:hover": { backgroundColor: "$primary10" },
      },
      red: {
        color: "white",
        backgroundColor: "$red9",
        "&:hover": { backgroundColor: "$red10" },
      },
      slate: {
        color: "white",
        backgroundColor: "$slate9",
        "&:hover": { backgroundColor: "$slate10" },
      },
    },
  },

  defaultVariants: {
    size: "base",
  },
});

type Props = {
  children: ReactNode;
  color: "primary" | "red" | "slate";
  size?: "base" | "lg" | "xl";
  isGhost?: true;
  isOutline?: true;
  under?: true;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<Props> = ({ children, color, size = "base", isGhost, isOutline, under, onClick }) => {
  return (
    <StitchesButton
      color={color}
      size={size}
      isGhost={isGhost && color}
      isOutline={isOutline && color}
      under={under}
      onClick={onClick}
    >
      {children}
    </StitchesButton>
  );
};
