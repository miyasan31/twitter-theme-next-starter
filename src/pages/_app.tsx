import { IdProvider } from "@radix-ui/react-id";
import type { AppProps } from "next/app";
import { memo } from "react";
import { WithTheme } from "src/components/theme";

const MyApp = (props: AppProps) => {
  return (
    <IdProvider>
      <props.Component {...props.pageProps} />
    </IdProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default memo(WithTheme(MyApp));
