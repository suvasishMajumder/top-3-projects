import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ThemeContext } from "@/Contexts/ThemeContext";
import { useContext } from "react";
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

 function ThemeToggler ({handleChangeTheme}:{handleChangeTheme: ()=> void}) {

    const {theme , toggleTheme} = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2">
      <Switch onClick={handleChangeTheme}  id="airplane-mode" className="" />
      <Label htmlFor="airplane-mode" className={`${theme === 'light' ? 'text-white' : 'text-white'}`}>
        {theme === 'light'? 'Switch Theme' : 'Switch Theme'}</Label>
      <span className="">{theme === 'light' ? <Sun className={`${theme === 'light' ? 'text-white' : 'text-white'}`} /> 
      : <Moon className={`${theme === 'light' ? 'text-white' : 'text-white'}`} />}</span>
    </div>
  )
}

export default ThemeToggler;