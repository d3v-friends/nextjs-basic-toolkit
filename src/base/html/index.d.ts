import { ReactNode } from "react";
import { Viewport } from "next";
import "../../../asset/style/index.scss";
interface Props {
    lang?: string;
    children?: ReactNode;
}
export declare const viewport: Viewport;
export default function ({ children, lang }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
