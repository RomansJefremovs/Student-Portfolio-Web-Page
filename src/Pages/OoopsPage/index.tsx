import './styles.css'
import Construction from '../../Assets/helmet.png'
import Text from "../../Reusable/Text";
const OoopsPage = () => {
    return(
        <div className="construction">
            <Text text={'Oops, this part of website is under construction!'} type={'m'} color={"white"}/>
            <img src={Construction} width={256} height={256} alt={'construction'}/>
            <Text text={'Coming Soon...'} type={'m'} color={'white'}/>
        </div>
    )
}

export default OoopsPage