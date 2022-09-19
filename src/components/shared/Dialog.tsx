import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { FC, ReactNode } from "react";

import { contentShow, overlayShow } from "~/components/shared/animation";
import { StitchesButton } from "~/components/shared/Button";
import { Flex } from "~/components/shared/Flex";
import { IconButton } from "~/components/shared/IconButton";
import { Text } from "~/components/shared/Text";
import { styled } from "~/libs/stiches";

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: "$slate4",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const AlertDialogContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: "$slate2",
  borderRadius: "1rem",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "320px",
  padding: "2rem",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
  "&:focus": { outline: "none" },
});

type Props = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  openButtonLabel: string;
  closeButtonLabel: string;
  confirmationButtonLabel: string;
};

export const Dialog: FC<Props> = (props) => {
  return (
    <AlertDialogPrimitive.Root>
      <StyledOverlay />

      <AlertDialogPrimitive.Trigger asChild>
        <IconButton color="slate">{props.icon}</IconButton>
      </AlertDialogPrimitive.Trigger>

      <AlertDialogContent>
        <Flex direction="col" gap={0.75}>
          <AlertDialogPrimitive.Title asChild>
            <Text bold size="xl">
              {props.title}
            </Text>
          </AlertDialogPrimitive.Title>

          <AlertDialogPrimitive.Description asChild>
            <Text faded size="sm">
              {props.subtitle}
            </Text>
          </AlertDialogPrimitive.Description>

          <Flex direction="col" gap={0.75}>
            <AlertDialogPrimitive.Action asChild>
              <StitchesButton color="red" size="lg">
                {props.confirmationButtonLabel}
              </StitchesButton>
            </AlertDialogPrimitive.Action>
            <AlertDialogPrimitive.Cancel asChild>
              <StitchesButton color="slate" size="lg" isOutline="slate">
                {props.closeButtonLabel}
              </StitchesButton>
            </AlertDialogPrimitive.Cancel>
          </Flex>
        </Flex>
      </AlertDialogContent>
    </AlertDialogPrimitive.Root>
  );
};
