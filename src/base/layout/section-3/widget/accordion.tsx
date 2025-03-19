import React, {ReactNode, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Asset} from "@root";
import CSS from "./index.module.scss";
import {usePathname} from "next/navigation";

type AsideMenu = Pick<MenuProps, "title" | "collapsed"> & {submenus: SubmenuProps[]};

export interface Props {
	header: HeaderProps;
	asideMenus: AsideMenu[];
}

export default function ({header, asideMenus}: Readonly<Props>) {
	const pathname = usePathname();
	return (
		<>
			<Header {...header} />
			{asideMenus.map((item, i1) => (
				<Menu
					key={i1}
					title={item.title}
					collapsed={item.collapsed}>
					{item.submenus.map((submenu, i2) => (
						<Submenu
							{...submenu}
							pathname={pathname}
							key={i2}
						/>
					))}
				</Menu>
			))}
		</>
	);
}

interface HeaderProps {
	iconSrc?: string;
	children?: ReactNode;
	href?: string;
}

function Header({children, href, iconSrc}: Readonly<HeaderProps>) {
	href = href || "/";
	return (
		<Link
			href={href}
			className="h-(--height-nav) flex items-center p-3 text-xl font-bold overflow-hidden text-(--dark)">
			{iconSrc && (
				<Image
					className="mr-3"
					width={30}
					height={30}
					src={iconSrc}
					alt={href}
				/>
			)}
			{children}
		</Link>
	);
}

export interface MenuProps {
	title?: ReactNode;
	children?: ReactNode;
	collapsed?: boolean;
}

function Menu({children, collapsed, title}: Readonly<MenuProps>) {
	const [collapse, setCollapse] = useState(collapsed);
	const icon = collapse ? Asset.svg.flat.angleSmallDown : Asset.svg.flat.angleSmallUp;

	return (
		<>
			<button
				className="h-[30px] lg:h-[40px] w-full flex items-center p-3 text-(--primary) font-bold"
				onClick={() => setCollapse(!collapse)}>
				<div className="grow text-left">{title}</div>
				<Image
					className="filter-(--primary-filter)"
					width={20}
					height={20}
					src={icon}
					alt="up"
				/>
			</button>

			{collapse && children}
		</>
	);
}

interface SubmenuProps {
	iconSrc?: string;
	title?: ReactNode;
	href: string;
}

function Submenu({title, href, iconSrc, pathname}: Readonly<SubmenuProps & {pathname: string}>) {
	let className = `h-[35px] mb-1 p-2 flex items-center text-sm rounded-sm ${CSS["aside-submenu"]}`;
	if (pathname.startsWith(href)) className = `${className} ${CSS["active"]}`;

	return (
		<Link
			className={`pl-6 pr-3 block`}
			href={href}>
			<div className={className}>
				{iconSrc && (
					<Image
						className="mr-2"
						src={iconSrc}
						width={16}
						height={16}
						alt={href}
					/>
				)}
				{title}
			</div>
		</Link>
	);
}
