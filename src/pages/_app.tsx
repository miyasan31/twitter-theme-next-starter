import "src/styles/globals.css";

// import { ApolloProvider } from "@apollo/client";
import { IdProvider } from "@radix-ui/react-id";
import type { AppProps } from "next/app";
import { memo } from "react";
import { WithTheme } from "src/components/theme";
// import { client } from "src/graphql/apollo-client";

const MyApp = (props: AppProps) => {
	return (
		<IdProvider>
			{/* <ApolloProvider client={client}> */}
			<props.Component {...props.pageProps} />
			{/* </ApolloProvider> */}
		</IdProvider>
	);
};

// eslint-disable-next-line import/no-default-export
export default memo(WithTheme(MyApp));
