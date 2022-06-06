import React from "react";

import './styles.css'
import Text from "../../Reusable/Text";
import ProjectProps from "./props";
import Icon from "../../Reusable/Icon";

const ProjectCard = ({title, subTitle,backgroundColor,image}:ProjectProps) => {

    return(
        <div className={`project-container ${backgroundColor}`}>
                <div className='project-texts'>
                    <Text text={title} type={'m'} color={'white'}/>
                    <Text text={subTitle} type={'xs'} color={'white'}/>
                </div>
                <div className='project-icon'>
                    <Icon source={image} width={'200rem'} height={'200rem'} />
                </div>
        </div>
    )
}

export default ProjectCard