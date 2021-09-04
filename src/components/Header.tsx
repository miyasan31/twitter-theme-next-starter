import Link from "next/link";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<div className="p-5 w-full bg-gray-200">
			<Link href="/">
				<a className="py-3 px-4 bg-green-300">/ - CSR</a>
			</Link>
			<Link href="/posts">
				<a className="py-3 px-4 mx-3 bg-green-300">/posts - SSR</a>
			</Link>
			<Link href="/posts/1">
				<a className="py-3 px-4 bg-green-300">/posts/1 - SSG</a>
			</Link>
		</div>
	);
};
