import { useEffect, useState } from "react";
import {createContext} from 'react'


interface ThemeContextType{

    theme:string;
    toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});


import { ReactNode } from "react";

export const ThemeProvider = ({children}: {children: ReactNode}) =>{

const [theme, setTheme] = useState<string>('light');


useEffect(()=>{

const existingTheme = localStorage.getItem('theme');

if(existingTheme){

    setTheme(existingTheme);

}
 
},[])


const toggleTheme = () =>{

    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    localStorage.setItem('theme',newTheme);

}

return (
<ThemeContext.Provider  value={{theme,toggleTheme}}>
{children}
</ThemeContext.Provider>
)

}