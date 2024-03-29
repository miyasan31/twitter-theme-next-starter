import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { FC } from "react";

import { Flex } from "~/components/shared/Flex";
import { Label } from "~/components/shared/Label";
import { styled } from "~/libs/stiches";

const SwitchRoot = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 50,
  height: 24,
  backgroundColor: "$slate7",
  borderRadius: "9999px",
  border: "1px solid $slate11",
  boxSizing: "border-box",
  '&[data-state="checked"]': { backgroundColor: "$primary9" },

  variants: {
    isDark: {
      true: {
        backgroundColor: "$slate7",
        '&[data-state="checked"]': { backgroundColor: "$slate9" },
      },
    },
  },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  square: 18,
  backgroundColor: "white",
  borderRadius: "9999px",
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(28px)" },
});

type Props = {
  labelLeft?: string;
  labelRight?: string;
  defaultChecked?: boolean;
  isDark?: true;
  onClick?: () => void;
};

export const Switch: FC<Props> = ({ labelLeft, labelRight, defaultChecked, isDark, onClick }) => {
  return (
    <Flex items="center" gap={0.25}>
      <Label id="s1">{labelLeft}</Label>
      <SwitchRoot defaultChecked={defaultChecked} id="s1" onClick={onClick} isDark={isDark}>
        <SwitchThumb />
      </SwitchRoot>
      <Label id="s1">{labelRight}</Label>
    </Flex>
  );
};
