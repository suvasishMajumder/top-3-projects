import { ReactNode } from "react";
export declare const AuthContext: import("react").Context<{
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>;
export declare const useAuthHook: () => {
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
interface MyProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: ({ children }: MyProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
