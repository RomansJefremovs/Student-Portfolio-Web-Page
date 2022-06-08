import React from "react";
import './styles.css'
import Text from "../../Reusable/Text";
import MenuButton from "../../Reusable/MenuButton";
import ContactForm from "../ContactForm";
const Footer = ()=>{
    return(
        <div id='contact' className="footer-container">
            <div className="left-container">
                <div className="footer-title">
                    <Text text={'Lets make something'} type={'l'} color={"black"} />
                    <Text text={'amazing together.'} type={'l'} color={"black"} />
                </div>
                <div className="footer-little">
                    <Text text={`Start by `} type={'smbold'} color={'black'} />
                    <a href={'#'}>
                        <Text text={` saying hi`} type={'smbold'} color={'orange'} />
                    </a>
                </div>
            </div>
            <div className="middle-container">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Footer