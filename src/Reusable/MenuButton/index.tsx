import React from "react"
import './styles.css'
import MenuButtonProps from "./props";

const MenuButton = (props:MenuButtonProps) =>{
    return(
        <a href={props.target}>
            <div className='btn'>
                <p>{props.text}</p>
            </div>
        </a>
    )
}

export default MenuButton;