import { styled } from "src/utils";

export const Input = styled("input", {
	all: "unset",
	width: "100%",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flex: "1",
	borderRadius: 4,
	padding: "0 10px",
	fontSize: 13,
	lineHeight: 1,
	color: "$violet11",
	boxShadow: "0 0 0 1px $violet7",
	height: 25,

	"&:focus": { boxShadow: "0 0 0 2px $violet8" },
});
