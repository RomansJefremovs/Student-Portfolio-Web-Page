import React, {useEffect} from "react"
import './styles.css'
import MenuButtonProps from "./props";

const MenuButton = (props:MenuButtonProps) =>{


    // useEffect(() => {
    //     let url = window.location.href.split("/");
    //     let target = url[url.length - 1].toLowerCase();
    //     let element = document.getElementById(target);
    //     element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    // }, []);

    return(
        <a href='/'
           onClick={e => {
               let hero = document.getElementById(`${props.target}`);
               e.preventDefault();  // Stop Page Reloading
               hero && hero.scrollIntoView({behavior:"smooth",block:"start"});}}
           >
            <div className='btn'>
                <p>{props.text}</p>
            </div>
        </a>
    )
}

export default MenuButton;