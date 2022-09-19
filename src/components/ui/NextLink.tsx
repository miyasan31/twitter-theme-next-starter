import Link from "next/link";
import type { FC, ReactNode } from "react";

import { styled } from "~/libs/stiches";

export const Anker = styled("a", {
  "&:hover": { textDecoration: "underline" },

  variants: {
    btn: {
      true: {
        all: "unset",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem",
        borderRadius: 99999,
        fontWeight: 500,
        cursor: "pointer",
      },
    },
  },
});

type Props = {
  children: ReactNode;
  href: string;
  btn?: true;
};

export const NextLink: FC<Props> = (props) => {
  return (
    <Link href={props.href} passHref>
      <Anker btn={props.btn}>{props.children}</Anker>
    </Link>
  );
};
