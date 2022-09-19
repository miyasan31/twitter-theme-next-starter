import type { FC, ReactNode } from "react";

import { styled } from "~/libs/stiches";

const StitchesFlex = styled("div", {
  display: "flex",

  variants: {
    direction: {
      col: {
        flexDirection: "column",
      },
      rowR: {
        flexDirection: "row-reverse",
      },
      colR: {
        flexDirection: "column-reverse",
      },
    },

    justify: {
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      between: {
        justifyContent: "space-between",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
    },

    items: {
      center: {
        alignItems: "center",
      },
    },
  },
});

type Props = {
  direction?: "rowR" | "col" | "colR";
  justify?: "center" | "end" | "between" | "evenly";
  items?: "center";
  gap?: number;
  children: ReactNode;
};

export const Flex: FC<Props> = ({ direction, justify, items, gap = 0, children }) => {
  const gapProps = gap + "rem";
  return (
    <StitchesFlex direction={direction} justify={justify} items={items} css={{ gap: gapProps }}>
      {children}
    </StitchesFlex>
  );
};
