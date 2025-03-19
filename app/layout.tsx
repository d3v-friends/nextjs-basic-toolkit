import React, {ReactNode} from "react";
import {Asset, Base} from "@root";

export default async function ({children}: Readonly<{children: ReactNode}>) {
	return (
		<Base.HTML lang="ko">
			<Base.Layout.Section3
				top={"Top"}
				header={{
					iconSrc: Asset.svg.flat.menuBurger,
					children: "Title",
					href: "/",
				}}
				asideMenus={[
					{
						title: "UI Components",
						collapsed: true,
						submenus: [
							{
								title: "Button",
								iconSrc: Asset.svg.dazzle.host,
								href: "/button",
							},
							{
								title: "Table",
								iconSrc: Asset.svg.dazzle.host,
								href: "/table",
							},
						],
					},
				]}>
				{children}
			</Base.Layout.Section3>
		</Base.HTML>
	);
}
