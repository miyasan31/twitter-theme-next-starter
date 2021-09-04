import { useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import { Switch } from "src/components/shared";

export const ThemeChanger: VFC = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const [currentTheme, setCurrentTheme] = useState("");

	const handleClick = () => {
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
		<Switch
			labalLeft="is light"
			labalRight="is dark"
			defaultChecked={currentTheme !== "light"}
			isDark
			onClick={handleClick}
		/>
	);
};
