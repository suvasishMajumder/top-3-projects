interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextType>;
import { ReactNode } from "react";
export declare const ThemeProvider: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export {};
