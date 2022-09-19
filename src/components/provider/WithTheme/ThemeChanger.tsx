import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "~/components/shared/Switch";

/**
 * @package
 */
export const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");

  const onClick = () => {
    if (resolvedTheme) {
      const oppositeColor =
        resolvedTheme.indexOf("light") === 0
          ? resolvedTheme.replace("light", "dark")
          : resolvedTheme.replace("dark", "light");
      setTheme(oppositeColor);
    }
  };

  useEffect(() => {
    resolvedTheme && setCurrentTheme(resolvedTheme.split("_")[0]);
    return setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Switch labelLeft="light" labelRight="dark" defaultChecked={currentTheme !== "light"} isDark onClick={onClick} />
  );
};
