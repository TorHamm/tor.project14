/* eslint-disable prefer-const */
import { ReactNode, useEffect, useState } from "react";
import "./_Header.scss";

interface HeaderProps {
  children: ReactNode;
  getTheme: (isDarkMode: boolean) => void;
}

const Header = ({ children , getTheme }: HeaderProps) => {
  const sunDark = "/images/icon-sun-dark.svg";
  const sunLight = "/images/icon-sun-light.svg";
  const moonDark = "/images/icon-moon-dark.svg";
  const moonLight = "/images/icon-moon-light.svg";

  const savedTheme = localStorage.getItem("theme");
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const sunImg = isDarkMode ? sunLight : sunDark;
  const moonImg = isDarkMode ? moonLight : moonDark;

  const handleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    window.location.reload();
  };

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    getTheme(isDarkMode)
  },[getTheme, isDarkMode]);

  return (
    <header>
      <div className='questionType'>{children}</div>
      <div className='themeSwitch'>
        <img src={sunImg} alt='light icon'></img>
        <label className='switch' onChange={handleSwitch}>
          <input type='checkbox' checked={isDarkMode} readOnly></input>
          <span className='slider'></span>
        </label>
        <img src={moonImg} alt='dark icon'></img>
      </div>
    </header>
  );
};

export default Header;
