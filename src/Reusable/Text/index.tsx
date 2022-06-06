import React from "react";
import './styles.css'
import TextProps from "./props";

const Text = ({text,type, color}:TextProps) => {
    return(
        <div className={color}>
            <p className={type}>{text}</p>
        </div>
    )
}

export default Text