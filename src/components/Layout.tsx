import type { FC } from "react";
// import { Header } from "src/components/Header";

export const Layout: FC = (props) => {
	return (
		<div>
			{/* <Header /> */}
			{props.children}
		</div>
	);
};
