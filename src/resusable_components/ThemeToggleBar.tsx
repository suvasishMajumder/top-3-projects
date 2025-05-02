import { ThemeContext } from '@/Contexts/ThemeContext';
import React, { Suspense, useContext } from 'react'
import ThemeToggler from './ThemeToggler';


const ThemeToggleBar = () => {

const { theme , toggleTheme } = useContext(ThemeContext);

const handleChangeTheme = () =>{

toggleTheme();

}
 

  return (
    <div className={`h-[5rem] ${theme === 'light' ? ' bg-lime-700' : ' bg-[#383838]'} max-w-[100vw] flex justify-center items-center overflow-x-hidden`}>
         <ThemeToggler handleChangeTheme={handleChangeTheme} />
    </div>
  )
}

export default ThemeToggleBar;
