import React from "react";
import Navbar from "../../Components/Navbar";
import DesktopProps from "./props";

const Desktop = ({properties:{phone,titles,mail}}:DesktopProps)=>{
    return(
        <Navbar properties={{phone,titles,mail}} />
    )
}

export default Desktop