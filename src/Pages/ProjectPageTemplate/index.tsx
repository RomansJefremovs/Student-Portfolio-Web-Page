import './styles.css'
import ProjectPageProps from './props'
import Text from "../../Reusable/Text";
import ProjectPageCard from "../../Components/ProjectPageCard";



const ProjectPageTemplate = (props:ProjectPageProps) => {
    return(
        <div className="project-page">
            <Text text={'First Semester'} type={'xl'} color={"black"}/>
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
            </div>
            <div className="project-subsection">
                <Text text={'Structural Design'} type={'smbold'} color={'black'} />
            </div>
            <div className="project-subsection">
                <Text text={'Building Planning and Management'} type={'smbold'} color={'black'} />
            </div>
        </div>
    )
}

export default ProjectPageTemplate