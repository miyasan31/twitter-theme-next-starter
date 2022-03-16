import { IdProvider } from "@radix-ui/react-id";
import type { AppProps } from "next/app";
import { memo } from "react";
import { Toaster } from "react-hot-toast";
import { WithTheme } from "src/components/functional/WithTheme";

const MyApp = (props: AppProps) => {
  return (
    <IdProvider>
      <props.Component {...props.pageProps} />
      <Toaster />
    </IdProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default memo(WithTheme(MyApp));
