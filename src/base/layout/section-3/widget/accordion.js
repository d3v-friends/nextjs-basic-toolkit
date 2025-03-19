import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Asset } from "../../../..";
import CSS from "./index.module.scss";
import { usePathname } from "next/navigation";
export default function ({ header, asideMenus }) {
    const pathname = usePathname();
    return (_jsxs(_Fragment, { children: [_jsx(Header, Object.assign({}, header)), asideMenus.map((item, i1) => (_jsx(Menu, { title: item.title, collapsed: item.collapsed, children: item.submenus.map((submenu, i2) => (_createElement(Submenu, Object.assign({}, submenu, { pathname: pathname, key: i2 })))) }, i1)))] }));
}
function Header({ children, href, iconSrc }) {
    href = href || "/";
    return (_jsxs(Link, { href: href, className: "h-(--height-nav) flex items-center p-3 text-xl font-bold overflow-hidden text-(--dark)", children: [iconSrc && (_jsx(Image, { className: "mr-3", width: 30, height: 30, src: iconSrc, alt: href })), children] }));
}
function Menu({ children, collapsed, title }) {
    const [collapse, setCollapse] = useState(collapsed);
    const icon = collapse ? Asset.svg.flat.angleSmallDown : Asset.svg.flat.angleSmallUp;
    return (_jsxs(_Fragment, { children: [_jsxs("button", { className: "h-[30px] lg:h-[40px] w-full flex items-center p-3 text-(--primary) font-bold", onClick: () => setCollapse(!collapse), children: [_jsx("div", { className: "grow text-left", children: title }), _jsx(Image, { className: "filter-(--primary-filter)", width: 20, height: 20, src: icon, alt: "up" })] }), collapse && children] }));
}
function Submenu({ title, href, iconSrc, pathname }) {
    let className = `h-[35px] mb-1 p-2 flex items-center text-sm rounded-sm ${CSS["aside-submenu"]}`;
    if (pathname.startsWith(href))
        className = `${className} ${CSS["active"]}`;
    return (_jsx(Link, { className: `pl-6 pr-3 block`, href: href, children: _jsxs("div", { className: className, children: [iconSrc && (_jsx(Image, { className: "mr-2", src: iconSrc, width: 16, height: 16, alt: href })), title] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVCLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVM1QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBa0I7SUFDN0QsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUNOLDhCQUNDLEtBQUMsTUFBTSxvQkFBSyxNQUFNLEVBQUksRUFDckIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdCLEtBQUMsSUFBSSxJQUVKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsWUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNuQyxlQUFDLE9BQU8sb0JBQ0gsT0FBTyxJQUNYLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxFQUFFLElBQ04sQ0FDRixDQUFDLElBVEcsRUFBRSxDQVVELENBQ1AsQ0FBQyxJQUNBLENBQ0gsQ0FBQztBQUNILENBQUM7QUFRRCxTQUFTLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUF3QjtJQUMvRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUNuQixPQUFPLENBQ04sTUFBQyxJQUFJLElBQ0osSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUMsd0ZBQXdGLGFBQ2pHLE9BQU8sSUFBSSxDQUNYLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsT0FBTyxFQUNaLEdBQUcsRUFBRSxJQUFJLEdBQ1IsQ0FDRixFQUNBLFFBQVEsSUFDSCxDQUNQLENBQUM7QUFDSCxDQUFDO0FBUUQsU0FBUyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBc0I7SUFDOUQsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUVwRixPQUFPLENBQ04sOEJBQ0Msa0JBQ0MsU0FBUyxFQUFDLDhFQUE4RSxFQUN4RixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQ3JDLGNBQUssU0FBUyxFQUFDLGdCQUFnQixZQUFFLEtBQUssR0FBTyxFQUM3QyxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsSUFBSSxFQUNULEdBQUcsRUFBQyxJQUFJLEdBQ1AsSUFDTSxFQUVSLFFBQVEsSUFBSSxRQUFRLElBQ25CLENBQ0gsQ0FBQztBQUNILENBQUM7QUFRRCxTQUFTLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBOEM7SUFDN0YsSUFBSSxTQUFTLEdBQUcsMERBQTBELEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO0lBQ2pHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFBRSxTQUFTLEdBQUcsR0FBRyxTQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFFM0UsT0FBTyxDQUNOLEtBQUMsSUFBSSxJQUNKLFNBQVMsRUFBRSxpQkFBaUIsRUFDNUIsSUFBSSxFQUFFLElBQUksWUFDVixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLE9BQU8sSUFBSSxDQUNYLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEdBQUcsRUFBRSxPQUFPLEVBQ1osS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxJQUFJLEdBQ1IsQ0FDRixFQUNBLEtBQUssSUFDRCxHQUNBLENBQ1AsQ0FBQztBQUNILENBQUMifQ==