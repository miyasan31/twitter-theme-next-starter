import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { RadioGroup } from "~/components/shared/RadioGroup";

type OptionsProps = {
  id: string;
  label: string;
  value: string;
  color: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONS: OptionsProps[] = [
  { id: "1", label: "blue", value: "blue", color: "blue" },
  { id: "2", label: "amber", value: "amber", color: "amber" },
  { id: "3", label: "crimson", value: "crimson", color: "crimson" },
  { id: "4", label: "violet", value: "violet", color: "violet" },
  { id: "5", label: "orange", value: "orange", color: "orange" },
  { id: "6", label: "green", value: "green", color: "green" },
];

/**
 * @package
 */
export const ColorChanger = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  const onClick = (e: any) => {
    if (e.target.value === undefined) return;
    if (resolvedTheme?.indexOf("light") === 0) {
      const customColor = "light_" + e.target.value;
      setTheme(customColor);
    } else {
      const customColor = "dark_" + e.target.value;
      setTheme(customColor);
    }
  };

  useEffect(() => {
    resolvedTheme && setCurrentColor(resolvedTheme.split("_")[1]);
    return setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <RadioGroup options={RADIO_OPTIONS} defaultValue={currentColor} ariaLabel="colorChanger" onClick={onClick} />;
};
