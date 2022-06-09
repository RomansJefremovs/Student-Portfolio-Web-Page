import './styles.css'
import ProjectPageProps from './props'
import Text from "../../Reusable/Text";
import ProjectPageCard from "../../Components/ProjectPageCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import h1 from '../../Assets/h1.png'
import h2 from '../../Assets/h2.png'
import h3 from '../../Assets/h3.png'
import h4 from '../../Assets/h4.png'
import h5 from '../../Assets/h5.png'
import h6 from '../../Assets/h6.png'

const ProjectPageTemplate = (props:ProjectPageProps) => {
    return(
        <div className="project-page">
            <Text text={'First Semester'} type={'xl'} color={"black"}/>
            {/*<div className="page-carousel">*/}
                <Carousel width={1000} className={'page-carousel'} showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={true} infiniteLoop={true} autoPlay={true}>
                    <div>
                        <img src={h1} height={500}/>
                    </div>
                    <div>
                        <img src={h2} height={500}/>
                    </div>
                    <div>
                        <img src={h3} height={500}/>
                    </div>
                    <div>
                        <img src={h4} height={500}/>
                    </div>
                    <div>
                        <img src={h5} height={500}/>
                    </div>
                    <div>
                        <img src={h6} height={500}/>
                    </div>
                </Carousel>

            {/*</div>*/}
            <div className="project-subsection">
                <Text text={'Building Services'} type={'smbold'} color={'black'} />
                <div className="project-page-cards">
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greyBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                </div>
            </div>
            <div className="project-subsection">
                <Text text={'Building Design'} type={'smbold'} color={'black'} />
                <div className="project-page-cards">
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greyBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                </div>
            </div>
            <div className="project-subsection">
                <Text text={'Structural Design'} type={'smbold'} color={'black'} />
                <div className="project-page-cards">
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greyBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                </div>
            </div>
            <div className="project-subsection">
                <Text text={'Building Planning and Management'} type={'smbold'} color={'black'} />
                <div className="project-page-cards">
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greyBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'greenBg'} image={'House'}/>
                    <ProjectPageCard title={'Foundation'} subTitle={'Section'} backgroundColor={'orangeBg'} image={'House'}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectPageTemplate