/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "src/utils";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
