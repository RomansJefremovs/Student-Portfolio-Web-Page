import React from "react"
import './styles.css'
import MenuButtonProps from "./props";


const ContactLine = (props:MenuButtonProps) =>{
    return(
        <a href={props.target}>
            <div className='contact'>
                    <p>{props.phone}</p>
                <div className='img'></div>
            </div>
        </a>
    )
}

export default ContactLine;