import React, {useState} from 'react';
import './App.css';
import Mobile from "./Components/BurgerMenu";
import {useMediaQuery, useTheme} from "@mui/material";
import Desktop from "./Pages/Desktop";

function App() {
    const [value, setValue] = useState<boolean>(false)
    const toggleButton = ()=>{
        value ? setValue(false):setValue(true)
    }
    const phone = '+4522223717'
    const mail = '324735@via.dk'
    const titles: Array<string> = ['About Me', 'Projects', 'Contact']
    const desktopProps = {phone, mail, titles}
    const mobileProps = {phone, mail, titles, value, toggleButton}
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('md'));
    const desktop = useMediaQuery(theme.breakpoints.up('md'))

    const viewportManager = ()=>{
        if (mobile){
            return false
        }else if (desktop){
            return true
        }
    }
  return (
    <div className="App">
        {viewportManager() ?
            <Desktop properties={desktopProps}/>
            :
            <Mobile properties={mobileProps}/>}
    </div>
  );
}

export default App;
