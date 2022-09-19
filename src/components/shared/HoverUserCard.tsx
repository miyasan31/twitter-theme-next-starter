import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import type { FC } from "react";

import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "~/components/shared/animation";
import { Button } from "~/components/shared/Button";
import { CircleImg } from "~/components/shared/CircleImg";
import { Flex } from "~/components/shared/Flex";
import { NextLink } from "~/components/shared/NextLink";
import { Text } from "~/components/shared/Text";
import { styled } from "~/libs/stiches";

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

export const HoverUserCard: FC<Props> = ({ userId, userName, profile, following, followers, iconPath }) => {
  const onClick = () => {
    console.info("click!!");
  };

  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <ImageTrigger href="#" rel="noreferrer noopener">
          <CircleImg src={iconPath} />
        </ImageTrigger>
      </HoverCardPrimitive.Trigger>

      <HoverCardContent sideOffset={5}>
        <HoverCardArrow offset={25} />

        <Flex direction="col">
          <Flex justify="between">
            <CircleImg size="lg" src={iconPath} />
            <Button color="primary" onClick={onClick}>
              フォロー
            </Button>
          </Flex>

          <Flex direction="col" gap={1}>
            <Text pt={0.5}>
              <Text bold>{userName}</Text>
              <NextLink href="/">
                <Text faded>
                  {"@"}
                  {userId}
                </Text>
              </NextLink>
            </Text>

            <Text>{profile}</Text>

            <Flex gap={1}>
              <NextLink href="/">
                <Flex>
                  <Text bold>{following}</Text>
                  <Text faded>&nbsp;Following</Text>
                </Flex>
              </NextLink>

              <NextLink href="/">
                <Flex>
                  <Text bold>{followers}</Text>
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
