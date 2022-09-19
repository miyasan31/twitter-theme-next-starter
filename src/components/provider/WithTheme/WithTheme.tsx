import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import type { FC } from "react";
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
} from "~/libs/stiches/theme";

type AppPage = (props: AppProps) => JSX.Element;

/**
 * @package
 */
export const WithTheme = (Component: AppPage) => {
  return (props: AppProps) => {
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
};

const InitTheme: FC<{ children: JSX.Element }> = (props) => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) setTheme("light_blue");
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("class", resolvedTheme ?? "");
  }, [resolvedTheme]);

  return props.children;
};
