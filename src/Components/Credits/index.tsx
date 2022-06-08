import React from "react";
import './styles.css'
import Logo from "../../Reusable/Logo";
import Text from "../../Reusable/Text";

const Credits = () => {
    return(
        <div className="credits-container">
            <hr/>
            <div className="bottom-texts">
                    <Logo size={"small"}/>
                    <Text text={'Developed by Romans Jefremovs +4520848064  romanich1998@gmail.com'} type={'supersmall'} color={'black'} />
                    <Text text={'|    © 2022 All rights reserved'} type={"supersmall"} color={"black"}/>
            </div>
        </div>
    )
}
export default Credits