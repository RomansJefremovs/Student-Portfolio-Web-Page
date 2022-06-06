import React from "react";
import Icon from "../../Reusable/Icon";
import Text from "../../Reusable/Text";
import CardProps from "./props";

import './styles.css'

const Card = ({iconType, title, subTitle, margin}: CardProps) => {

    return(
        <div className={'card-container ' + margin}>
            <Icon source={iconType} width='75px' height='75px' />
            <div className="card-titles">
                <Text text={title} type='xsbold' color='black' />
                <Text text={subTitle} type='xxs' color='black' />
            </div>
        </div>
    )
}

export default Card