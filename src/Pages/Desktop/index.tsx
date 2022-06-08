import React from "react";
import Navbar from "../../Components/Navbar";
import DesktopProps from "./props";
import IntroBanner from "../../Components/IntroBanner";
import AboutMeBanner from "../../Components/AboutMeBanner";
import Projects from "../../Components/Projects";
import Competences from "../../Components/Competences";
import Footer from "../../Components/Footer";
import Credits from "../../Components/Credits";
// @ts-ignore
import Doc from '../../Assets/Roof-Detail.pdf'
const Desktop = ({properties:{phone,titles,mail}}:DesktopProps)=>{

    return(
        <div className='desktop'>
            <Navbar properties={{phone,titles,mail}} />
            <IntroBanner/>
            <AboutMeBanner />
            <Projects/>
            <Competences />
            <Footer />
            <Credits />
            <a href={Doc}>download</a>
        </div>

    )
}


export default Desktop