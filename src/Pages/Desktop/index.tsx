import React from "react";
import Navbar from "../../Components/Navbar";
import DesktopProps from "./props";
import Text from "../../Reusable/Text";
import IntroBanner from "../../Components/IntroBanner";
import Card from "../../Components/Card";
import AboutMeBanner from "../../Components/AboutMeBanner";
import ProjectCard from "../../Components/ProjectCard";

const Desktop = ({properties:{phone,titles,mail}}:DesktopProps)=>{

    return(
        <div className='desktop'>
            <Navbar properties={{phone,titles,mail}} />
            <IntroBanner/>
            {/*<Card iconType='Design' title='Building Design' subTitle='1 project' />*/}
            <AboutMeBanner />
            <ProjectCard title={'title'} subTitle={'subtitle'} backgroundColor={'greyBg'} image={'House'} />
        </div>

    )
}

export default Desktop