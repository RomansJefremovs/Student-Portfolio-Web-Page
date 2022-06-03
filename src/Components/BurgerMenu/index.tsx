import React, {useState} from "react"
import MobileProps from "../../Pages/Mobile/props";
import './styles.css'
import MobileMenuButton from "../../Reusable/MobileMenuButtons";
import BurgerButton from "../../Reusable/BurgerButton";


const BurgerMenu = ({properties:{titles, phone, mail,value, toggleButton}}:MobileProps)=>{
        return(
        <>
            <div className='burger-button'>
                <BurgerButton value={value} toggleButton={toggleButton}/>
            </div>
            <div className='mobMenu'>
                <MobileMenuButton text={titles[0]} target='#'/>
                <MobileMenuButton text={titles[1]} target='#'/>
                <MobileMenuButton text={titles[2]} target='#'/>
            </div>
        </>
    )
}

export default BurgerMenu