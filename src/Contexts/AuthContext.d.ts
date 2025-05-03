import { ReactNode } from "react";
export declare const AuthContext: import("react").Context<{
    isSignedIn: boolean;
    setIsSignedIn: () => void;
}>;
export declare const useAuthHook: () => {
    isSignedIn: boolean;
    setIsSignedIn: () => void;
};
interface MyProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: ({ children }: MyProviderProps) => import("react").JSX.Element;
export {};
