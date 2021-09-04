/* eslint-disable no-undef */
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect } from "react";
import {
	darkAmber,
	darkBlue,
	darkCrimson,
	darkGreen,
	darkOrange,
	darkViolet,
	lightAmber,
	lightBlue,
	lightCrimson,
	lightGreen,
	lightOrange,
	lightViolet,
} from "src/utils/themes";

type AppPage = (props: AppProps) => JSX.Element;

export const WithTheme = (Component: AppPage) => {
	const withTheme = (props: AppProps) => {
		return (
			<ThemeProvider
				attribute="class"
				themes={[
					darkAmber,
					darkBlue,
					lightAmber,
					lightBlue,
					darkCrimson,
					darkGreen,
					darkOrange,
					darkViolet,
					lightCrimson,
					lightGreen,
					lightOrange,
					lightViolet,
				]}
			>
				<InitTheme>
					<Component {...props} />
				</InitTheme>
			</ThemeProvider>
		);
	};

	return withTheme;
};

const InitTheme: VFC<{ children: JSX.Element }> = (props) => {
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		if (!resolvedTheme) setTheme("light_blue");
		const html = document.getElementsByTagName("html")[0];
		html.setAttribute("class", resolvedTheme ?? "");
	}, [resolvedTheme]);

	return props.children;
};
