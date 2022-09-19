import type { AppProps } from "next/app";
import { memo } from "react";
import { Toaster } from "react-hot-toast";
import { WithTheme } from "src/components/provider/WithTheme";

const MyApp = (props: AppProps) => {
  return (
    <>
      <props.Component {...props.pageProps} />
      <Toaster />
    </>
  );
};

export default memo(WithTheme(MyApp));
