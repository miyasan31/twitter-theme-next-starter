import type { FC, ReactNode } from "react";

import { styled } from "~/libs/stiches";

export const StitchesText = styled("div", {
  margin: 0,
  padding: 0,
  color: "$slate12",
  overflowWrap: "break-word",

  variants: {
    // size: {
    // 	xs: { fontSize: "$xs" },
    // 	sm: { fontSize: "$sm" },
    // 	base: { fontSize: "$base" },
    // 	lg: { fontSize: "$lg" },
    // 	xl: { fontSize: "$xl" },
    // 	x2l: { fontSize: "$x2l" },
    // 	x3l: { fontSize: "$x3l" },
    // 	x4l: { fontSize: "$x4l" },
    // 	x5l: { fontSize: "$x5l" },
    // 	x6l: { fontSize: "$x6l" },
    // 	x7l: { fontSize: "$x7l" },
    // 	x8l: { fontSize: "$x8l" },
    // 	x9l: { fontSize: "$x9l" },
    // },

    color: {
      blue: { color: "$blue9" },
      red: { color: "$red9" },
    },

    faded: {
      true: { color: "$slate11" },
    },
    bold: {
      true: { fontWeight: 700 },
    },
    under: {
      true: { textDecoration: "underline" },
    },
  },

  defaultVariants: {
    // size: "base",
  },
});

type Props = {
  children: ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "x2l" | "x3l" | "x4l";
  color?: "blue" | "red";
  bold?: true;
  faded?: true;
  under?: true;
  pt?: number;
  py?: number;
  pb?: number;
};

export const Text: FC<Props> = ({ children, size, color, bold, faded, under, pt, py, pb }) => {
  const ptProps = pt + "rem";
  const pyProps = py + "rem";
  const pbProps = pb + "rem";

  return (
    <StitchesText
      bold={bold}
      faded={faded}
      under={under}
      color={color}
      css={{
        paddingTop: ptProps,
        paddingY: pyProps,
        paddingBottom: pbProps,

        fontSize: "$" + size,
        lineHeight: "$" + size,
      }}
    >
      {children}
    </StitchesText>
  );
};
