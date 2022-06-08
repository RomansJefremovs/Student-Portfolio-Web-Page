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
                <Logo size={"large"}/>
                <div className='menu'>
                    <MenuButton text={titles[0]} target='aboutme'/>
                    <MenuButton text={titles[1]} target='projects'/>
                    <MenuButton text={titles[2]} target='contact'/>
                </div>
                <ContactLine phone={phone} mail={mail} target='#'/>
            </div>
        </>

    )
}
export default Navbar
