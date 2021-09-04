import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import type { VFC } from "react";
import { Button, CircleImg, Flex, NextLink, Text } from "src/components/shared";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "src/components/shared/animation";
import { styled } from "src/utils";

export const HoverCardContent = styled(HoverCardPrimitive.Content, {
	width: 300,
	borderRadius: "1rem",
	padding: "1.25rem",
	backgroundColor: "$slate3",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});

export const HoverCardArrow = styled(HoverCardPrimitive.Arrow, {
	fill: "$slate2",
});

const ImageTrigger = styled("a", {
	all: "unset",
	cursor: "pointer",
	borderRadius: "100%",
	width: "fit-content",
	backgroundColor: "red",
	display: "inline-block",
	"&:focus": { boxShadow: `0 0 0 2px white` },
});

type Props = {
	userId: string;
	userName: string;
	profile: string;
	following: number;
	followers: number;
	iconPath: string;
};

export const HoverUserCard: VFC<Props> = (props) => {
	const handleClick = () => {
		console.info("click!!");
	};

	return (
		<HoverCardPrimitive.Root>
			<HoverCardPrimitive.Trigger as={ImageTrigger} href="#" rel="noreferrer noopener">
				<CircleImg src={props.iconPath} />
			</HoverCardPrimitive.Trigger>

			<HoverCardContent sideOffset={5}>
				<HoverCardArrow offset={25} />

				<Flex direction="col">
					<Flex justify="between">
						<CircleImg size="lg" src={props.iconPath} />
						<Button color="primary" onClick={handleClick}>
							Following
						</Button>
					</Flex>

					<Flex direction="col" gap={1}>
						<Text pt={0.5}>
							<Text bold>{props.userName}</Text>
							<NextLink href="/">
								<Text faded>
									{"@"}
									{props.userId}
								</Text>
							</NextLink>
						</Text>

						<Text>{props.profile}</Text>

						<Flex gap={1}>
							<NextLink href="/">
								<Flex>
									<Text bold>{props.following}</Text>
									<Text faded>&nbsp;Following</Text>
								</Flex>
							</NextLink>

							<NextLink href="/">
								<Flex>
									<Text bold>{props.followers}</Text>
									<Text faded>&nbsp;Followers</Text>
								</Flex>
							</NextLink>
						</Flex>
					</Flex>
				</Flex>
			</HoverCardContent>
		</HoverCardPrimitive.Root>
	);
};
