import React, {useEffect} from "react";
import Card from "../Card";
import './styles.css'
import Text from "../../Reusable/Text";
import CountUp, {useCountUp} from 'react-countup';

const AboutMeBanner = () => {
    return(
        <div id='aboutme' className='about-container'>
            <div className="cards-section">
                <Card
                    iconType='Design'
                    title='Building Design'
                    subTitle='Doing with Love'
                    margin='margin'
                />
                <Card
                    iconType='Management'
                    title='Building Planning'
                    subTitle='Estimating the costs'
                    margin='margin'
                />
                <Card
                    iconType='Structural'
                    title='Structural Design'
                    subTitle='Stable buildings for you' />
            </div>
            <div id='about' className="about-text">
                <Text text='What do I study?' type='l' color='black' />
                <Text text={"First semester student at VIA UC, studying Architectecture Construction and Management.  Architecture is my passion, I love to design interion and exterior. Also I am always excited by organizing the construction. My first education is economics, that means i am good at management!"}
                      type={'xxs'}
                      color={"black"} />
                <div className="counters">
                    <div className="counter">
                        <Text text={<CountUp end={7} duration={3} enableScrollSpy={true} redraw={true}/>} type={"m"} color={'black'} />
                        <Text text='Semesters' type='xs' color={"black"} />
                    </div>
                    <div className="counter">
                        <Text text={<CountUp start={0} end={30} duration={3} enableScrollSpy={true} redraw={true} />} type={"m"} color={"black"} />
                        <Text text={"Courses"} type={"xs"} color={"black"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeBanner