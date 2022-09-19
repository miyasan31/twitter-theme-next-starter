import { styled } from "~/libs/stiches";

export const CircleImg = styled("img", {
  display: "block",
  borderRadius: "100%",

  variants: {
    size: {
      base: { square: 45 },
      lg: { square: 65 },
      xl: { square: 85 },
      xxl: { square: 135 },
    },
  },

  defaultVariants: {
    size: "base",
  },
});
