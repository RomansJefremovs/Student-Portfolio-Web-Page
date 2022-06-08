import React from "react";
import './styles.css'
import Text from "../../Reusable/Text";
import ProjectPageProps from "./props";
import Icon from "../../Reusable/Icon";
import {Link} from "react-router-dom";
// @ts-ignore
import Ridge from '../../Assets/Roof-Detail.pdf'

const ProjectPageCard = ({title, subTitle,backgroundColor,image}:ProjectPageProps) => {

    return(
        <Link to={Ridge} target={'_blank'}>
            <div className={`project-container-page ${backgroundColor}`}>
                <div className='project-page-texts'>
                    <Text text={title} type={'xsbold'} color={'white'}/>
                    <Text text={subTitle} type={'xxs'} color={'white'}/>
                </div>
                <div className='project-page-icon'>
                    <Icon source={image} width={'100rem'} height={'75rem'} />
                </div>
            </div>
        </Link>
    )
}

export default ProjectPageCard