import React, {useState} from "react";
import BurgerMenu from "../../Components/BurgerMenu";
import Props from "../Desktop/props";
import {BurgerProps} from "../../Components/BurgerMenu/props";
import MobileProps from "./props";

const Mobile = ({properties:{titles, phone, mail,value, toggleButton}}:MobileProps)=>{

return(
        <>
            <BurgerMenu properties={{titles, phone, mail,value, toggleButton}} />
        </>
    )
}
export default Mobile