import type { AppProps } from "next/app";
import { memo } from "react";
import { WithTheme } from "src/components/provider/WithTheme";

const MyApp = (props: AppProps) => {
  return (
    <>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default memo(WithTheme(MyApp));
