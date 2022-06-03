import React from "react";
import MenuButton from "../../Reusable/MenuButton";
import MenuButtonProps from "../../Reusable/MenuButton/props";
import Logo from "../../Reusable/Logo";
import ContactLine from "../../Reusable/ContactLine";
import './style.css'
import Props from "../../Pages/Desktop/props";



const Navbar = ({properties:{titles,phone,mail}}:Props)=>{
    return(
        <>
            <div className='container'>
                <Logo/>
                <div className='menu'>
                    <MenuButton text={titles[0]} target='#'/>
                    <MenuButton text={titles[1]} target='#'/>
                    <MenuButton text={titles[2]} target='#'/>
                </div>
                <ContactLine text={phone} target='#'/>
            </div>
        </>

    )
}
export default Navbar
