import React, {useState} from 'react';
import './App.css';
import Mobile from "./Components/BurgerMenu";
import { useMediaQuery, useTheme} from "@mui/material";
import Desktop from "./Pages/Desktop";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import OoopsPage from "./Pages/OoopsPage";
import ProjectPageTemplate from "./Pages/ProjectPageTemplate";


function App() {

    const [value, setValue] = useState<boolean>(false)
    const toggleButton = ()=>{
        value ? setValue(false):setValue(true)
    }
    const phone = '+45 22 22 37 17'
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
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={viewportManager() ?
                    <Desktop properties={desktopProps}/>
                    :
                    <Mobile properties={mobileProps}/>}/>
                <Route path="/1semester" element={<ProjectPageTemplate/>}/>
                <Route path="/2semester" element={<OoopsPage />}/>
                <Route path="/3semester" element={<OoopsPage />}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
