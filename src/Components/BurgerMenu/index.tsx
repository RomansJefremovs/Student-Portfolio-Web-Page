import React, {useState} from "react"
import MobileProps from "../../Pages/Mobile/props";
import BurgerButton from "../../Reusable/BurgerButton";
import {BurgerProps} from "./props";
import MenuButton from "../../Reusable/MenuButton";


const BurgerMenu = ({properties:{titles, phone, mail,value, toggleButton}}:MobileProps)=>{
        return(
        <div>
            <BurgerButton value={value} toggleButton={toggleButton} />
            <div className='mob-menu'>
                <MenuButton text={titles[0]} target='#'/>
                <MenuButton text={titles[1]} target='#'/>
                <MenuButton text={titles[2]} target='#'/>
            </div>
        </div>
    )
}

export default BurgerMenu