import React from "react"
import IconProps from "./props";
import Design from '../../Assets/blueprint.png'
import Management from '../../Assets/project-plan.png'
import Structural from '../../Assets/technical-support.png'
import House from '../../Assets/house.png'
const Icon = ({source, width, height}: IconProps) => {
    const typeOfIcon = () => {
        if (source === 'Design') {
            return Design
        } else if (source === 'Management') {
            return Management
        } else if (source === 'Structural') {
            return Structural
        } else if (source === 'House'){
            return House
        }
    }
    return(
        <img src={typeOfIcon()} width={width} height={height}/>
    )
}
export default Icon