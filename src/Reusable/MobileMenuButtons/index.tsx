import React from "react"
import './styles.css'
import MenuButtonProps from "./props";

const MobileMenuButton = (props:MenuButtonProps) =>{
    return(
        <a href={props.target}>
            <div className='btn-mobile'>
                <p className='btn-text'>{props.text}</p>
            </div>
        </a>
    )
}
export default MobileMenuButton;