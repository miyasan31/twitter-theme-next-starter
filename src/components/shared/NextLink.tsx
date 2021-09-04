import Link from "next/link";
import type { ReactNode, VFC } from "react";
import { styled } from "src/utils";

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

export const NextLink: VFC<Props> = (props) => {
	return (
		<Link href={props.href} passHref>
			<Anker btn={props.btn}>{props.children}</Anker>
		</Link>
	);
};
