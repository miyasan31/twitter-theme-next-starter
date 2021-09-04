import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { MouseEvent, VFC } from "react";
import { Flex, Label } from "src/components/shared";
import { styled } from "src/utils";

const RadioGroupRadio = styled(RadioGroupPrimitive.Item, {
	all: "unset",
	width: 25,
	height: 25,
	borderRadius: "100%",
	border: "1px solid $slate11",
	boxSizing: "border-box",

	variants: {
		color: {
			primary: { "&:hover": { backgroundColor: "$primary5" } },

			blue: { "&:hover": { backgroundColor: "$blue5" } },
			amber: { "&:hover": { backgroundColor: "$amber5" } },
			crimson: { "&:hover": { backgroundColor: "$crimson5" } },
			violet: { "&:hover": { backgroundColor: "$violet5" } },
			orange: { "&:hover": { backgroundColor: "$orange5" } },
			green: { "&:hover": { backgroundColor: "$green5" } },
		},
	},

	defaultVariants: {
		color: "primary",
	},
});

const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	position: "relative",
	"&::after": {
		content: '""',
		display: "block",
		width: 11,
		height: 11,
		borderRadius: "50%",
	},

	variants: {
		color: {
			primary: { "&::after": { backgroundColor: "$primary9" } },

			blue: { "&::after": { backgroundColor: "$blue9" } },
			amber: { "&::after": { backgroundColor: "$amber9" } },
			crimson: { "&::after": { backgroundColor: "$crimson9" } },
			violet: { "&::after": { backgroundColor: "$violet9" } },
			orange: { "&::after": { backgroundColor: "$orange9" } },
			green: { "&::after": { backgroundColor: "$green9" } },
		},
	},

	defaultVariants: {
		color: "primary",
	},
});

type OptionsProps = {
	id: string;
	label: string;
	value: string;
	color?: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

type Props = {
	options: OptionsProps[];
	defaultValue: string;
	ariaLabel: string;
	onClick: (e: MouseEvent<HTMLElement>) => void;
};

export const RadioGroup: VFC<Props> = (props) => {
	return (
		<RadioGroupPrimitive.Root defaultValue={props.defaultValue} aria-label={props.ariaLabel}>
			<Flex items="center">
				{props?.options.map((item) => {
					return (
						<Flex key={item.id} items="center">
							<RadioGroupRadio id={item.value} value={item.value} color={item.color} onClick={props.onClick}>
								<RadioGroupIndicator color={item.color} />
							</RadioGroupRadio>
							<Label htmlFor={item.value}>{item.label}</Label>
						</Flex>
					);
				})}
			</Flex>
		</RadioGroupPrimitive.Root>
	);
};
