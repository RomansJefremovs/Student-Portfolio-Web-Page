import React from "react";
import './styles.css'
import Text from '../../Reusable/Text/index'
import Student from '../../Assets/student-hat.png'


const IntroBanner = ()=> {
    return (
        <div className='intro-banner'>
            <div className="firstLine">
                <div className='greeting'>
                    <Text text='Hey There,' type='l' color='black'/>
                    <Text text={`I'm Darja`} type={"l"} color={"black"}/>
                </div>
                <Text text='I live in Denmark!' type='sm' color='black'/>
                <div className="age">
                    <Text text='23' type='xl' color='black'/>
                    <div className='years-old'>
                        <Text text={`YEARS`} type='xs' color='black'/>
                        <Text text={`OLD`} type='xs' color='black'/>
                    </div>
                </div>
            </div>
            <div className="secondLine">
                <div className="university" >
                    <img src={Student} width='100px'/>
                    <div className='student-via'>
                        <Text text={`Studying at `} type='xs' color='black'/>
                        <Text text={`VIA`} type='l' color='black'/>
                        <Text text={`University`} type='xs' color='black'/>
                        <Text text={`College`} type='xs' color='black'/>
                    </div>
                </div>
                <div className='passion'>
                    <Text text={`Architecture student`} type='xsbold' color='black' />
                    <Text text={`and`} type='xsbold' color='black' />
                    <Text text={`I love what I do!`} type='xsbold' color='black' />
                </div>
            </div>
        </div>
    )
}

export default IntroBanner