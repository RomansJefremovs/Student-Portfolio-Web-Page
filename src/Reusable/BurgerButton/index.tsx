import React from "react"
import './styles.css'
import burger from "../../Assets/menu-bar.png"
import cancel from '../../Assets/cancel.png'

export interface MobProps{
    value: boolean
    toggleButton: ()=>void
}
const BurgerButton = ({value, toggleButton}:MobProps)=>{
    console.log(value)
    return(
        <div className='burger' onClick={toggleButton}>
            {value ? <img className='img-cancel' src={cancel} alt='Cancel' /> : <img className='img-burger' src={burger} alt='Burger' />}
        </div>
    )
}

export default BurgerButton