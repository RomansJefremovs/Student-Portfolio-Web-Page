import React from "react";
import './style.css'
import LogoProps from "./props";
const Logo = ({size}:LogoProps)=>{
    return(

            <div className={`bg-img ${size}`}>
                <a href='#'>
                    Darja <br/> Jefremova
                </a>
            </div>
    )
}
export default Logo;