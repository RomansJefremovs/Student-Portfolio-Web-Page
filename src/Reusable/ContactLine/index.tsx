import React from "react"
import './styles.css'
import MenuButtonProps from "./props";

const ContactLine = (props:MenuButtonProps) =>{
    return(
        <a href={props.target}>
            <div className='contact'>
                <p>{props.text}</p>
                <div className='img'></div>
            </div>
        </a>
    )
}

export default ContactLine;