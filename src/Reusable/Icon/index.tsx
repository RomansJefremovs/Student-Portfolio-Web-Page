import React from "react"
import IconProps from "./props";
import Design from '../../Assets/blueprint.png'
import Management from '../../Assets/project-plan.png'
import Structural from '../../Assets/technical-support.png'
import House from '../../Assets/house.png'
import Family from '../../Assets/family.png'
import BigHouse from '../../Assets/big-house.png'
import Revit from '../../Assets/Revit.png'
import SketchApp from '../../Assets/Sketchup.png'
import HandDrawing from '../../Assets/hand-drawing.png'
import Lumion from '../../Assets/Lumion.png'
import Endscape from '../../Assets/enscape.png'
import Photoshop from '../../Assets/photoshop.png'
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
        } else if (source === 'Family'){
            return Family
        } else if (source === 'BigHouse'){
            return BigHouse
        }else if (source ==='Revit'){
            return Revit
        }else if (source ==='SketchApp'){
            return SketchApp
        }else if (source ==='HandDrawing'){
            return HandDrawing
        }else if (source ==='Lumion'){
            return Lumion
        }else if (source ==='Endscape'){
            return Endscape
        }else if (source ==='Photoshop'){
            return Photoshop
        }
    }
    return(
        <img src={typeOfIcon()} width={width} height={height}/>
    )
}
export default Icon