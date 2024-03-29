import type { FC, ReactNode } from "react";

import { Flex } from "~/components/shared/Flex";
import { Text } from "~/components/shared/Text";
import { styled } from "~/libs/stiches";

export const IconButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "inherit",
  borderRadius: "100%",
  cursor: "pointer",
  color: "$slate11",

  variants: {
    size: {
      base: { square: 35 },
      lg: { square: 40 },
      xl: { square: 45 },
    },

    color: {
      slate: {
        color: "$slate12",
        border: "1px solid $slate11",
        boxSizing: "border-box",
        "&:hover": { backgroundColor: "$slate6" },
      },

      primary: { "&:hover": { color: "$primary9", backgroundColor: "$primary3" } },
      red: { "&:hover": { color: "$red9", backgroundColor: "$red3" } },
      amber: { "&:hover": { color: "$amber9", backgroundColor: "$amber3" } },
      green: { "&:hover": { color: "$green9", backgroundColor: "$green3" } },
    },
  },

  defaultVariants: {
    size: "base",
  },
});

type Props = {
  children?: ReactNode;
  color: "primary" | "red" | "slate" | "amber" | "green";
  size?: "lg" | "xl";
  count?: number;
};

export const CountLabelIconButton: FC<Props> = ({ children, color, size, count }) => {
  return (
    <Flex items="center" gap={0.25}>
      <IconButton color={color} size={size}>
        {children}
      </IconButton>
      <Text faded>{count}</Text>
    </Flex>
  );
};
