import React from "react";
import './styles.css'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Text from "../../Reusable/Text";
import Icon from "../../Reusable/Icon";

const Competences = () => {
    const percentage1 = 95
    return(
        <div className="competences">
            <div className="competences-titles">
                <Text text={'My Competences'} type={'l'} color={"black"} />
            </div>
            <div className='competences-container'>
                <div className='progressbar'>
                    <CircularProgressbar value={95} text='95%' styles={buildStyles({
                        textColor: "#286f6c",
                        pathColor: "#286f6c",
                        trailColor: "#b1ded3"
                    })}/>
                    <Text text={'Architecture'} type={'xsbold'} color={"grey"} />
                </div>
                <div className='progressbar'>
                    <CircularProgressbar value={85} text='85%' styles={buildStyles({
                        textColor: "#286f6c",
                        pathColor: "#fccc64",
                        trailColor: "#b1ded3"
                    })}/>
                    <Text text={'Design'} type={'xsbold'} color={"grey"} />
                </div>
                <div className='progressbar'>
                    <CircularProgressbar value={80} text='80%' styles={buildStyles({
                        textColor: "#286f6c",
                        pathColor: "#b1ded3",
                        trailColor: "#fccc64"
                    })}/>
                    <Text text={'Construction'} type={'xsbold'} color={"grey"} />
                </div>
            </div>
            {/*<Text text={'Software Skills'} type={'m'} color={"black"} />*/}
            <div className="program-icons">
                <div className="program-single">
                    <Icon source={"Revit"} width={'40rem'} height={'40rem'} />
                    <Text text={'Revit' } type={'xxs'} color={"black"}/>
                </div>
                <div className="program-single">
                    <Icon source={"SketchApp"} width={'40rem'} height={'40rem'} />
                    <Text text={"SketchApp"} type={"xxs"} color={"black"} />
                </div>
                <div className="program-single">
                    <Icon source={"HandDrawing"} width={'40rem'} height={'40rem'} />
                    <Text text={"HandDrawing"} type={"xxs"} color={"black"} />
                </div>
                <div className="program-single">
                    <Icon source={"Lumion"} width={'40rem'} height={'40rem'} />
                    <Text text={"Lumion"} type={"xxs"} color={"black"} />
                </div>
                <div className="program-single">
                    <Icon source={"Endscape"} width={'40rem'} height={'40rem'} />
                    <Text text={"Enscape"} type={"xxs"} color={"black"} />
                </div>
                <div className="program-single">
                    <Icon source={"Photoshop"} width={'40rem'} height={'40rem'} />
                    <Text text={"Photoshop"} type={"xxs"} color={"black"} />
                </div>
            </div>

        </div>
    )
}

export default Competences