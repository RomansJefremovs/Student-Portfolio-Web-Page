import React from "react";
import './styles.css'
import Text from "../../Reusable/Text";
import ProjectCard from "../ProjectCard";
import {Link} from "react-router-dom";

const Projects = () => {
    return(
        <div id='projects' className='projects-container'>
            <div className="projects-upper">
                <div className="upper-titles">
                    <Text text={'My Projects'} type={'l'} color={'black'} />
                    <Text text={'All my semester projects'} type={'xs'} color={'black'} />
                </div>
            </div>
            <div className="projects-cards">
                <Link to={'/1semester'}>
                    <ProjectCard
                        title={'1ST Semester'}
                        subTitle={'One Story L-shaped House'}
                        backgroundColor={'greyBg'}
                        image={'House'}/>
                </Link>
                <Link to={'/2semester'}>
                    <ProjectCard
                        title={'2nd Semester'}
                        subTitle={'Two Story House'}
                        backgroundColor={'orangeBg'}
                        image={'Family'}/>
                </Link>
                <Link to={'/3semester'}>
                    <ProjectCard
                        title={'3rd Semester'}
                        subTitle={'Skyscraper'}
                        backgroundColor={'blueBg'}
                        image={'BigHouse'}/>
                </Link>
            </div>
            <div className="more-projects">
                <Text text={'Explore more projects'} type={'xs'} color={'orange'} />
            </div>
        </div>
    )
}

export default Projects