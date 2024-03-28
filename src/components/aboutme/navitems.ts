import { IconType } from "react-icons/lib";
import { MdWork, MdOutlineComputer } from "react-icons/md";

export type ExperienceItem = {
    role: string,
    time: string,
    desc: string,
    tech: Array<string>
}

export type ProjectItem = {
    name: string,
    time: string, 
    desc: string,
    link?: string
}

const experienceData: Array<ExperienceItem> = [
    {
        role: "Junior Data Analyst Co-op",
        time: "May 2023 - Aug 2023",
        desc: "Authored a manuscript for a peer-reviewed research paper that will be published on Nature Scientific Data,\
        actively contributing to the cited research in the data science community.\
        Implemented an ETL pipeline using Python, resulting in a 50% increase in data acquisition speed and a 25%\
        reduction in processing time, ensuring continuous updates to the dataset.",
        tech: ["Python", "Pandas", "boto3", "SOAP API"]
    },
    {
        role: "Full Stack Developer",
        time: "Mar 2019 - Oct 2019",
        desc: "Designed and deployed a scalable architecture using Spring Boot, integrating an MQTT server with web services, \
        resulting in a 7% cost savings for the pipeline project and a significant reduction in on-site maintenance.\
        Developed a suite of cost-effective front-end applications for pipeline engineers, leveraging Vue.js for an intuitive\
        and responsive user interface. This effort contributed to substantial savings of up to 100,000 CNY.",
        tech: ["Java", "Spring Boot", "Vue.js", "Vuex", "MQTT", "MySQL", "RabbitMQ"]
    },
    {
        role: "Full Stack Developer",
        time: "Mar 2018 - Mar 2019",
        desc: "Spearheaded the design and development of a highly successful furniture shop management system, contributing\
        to a remarkable 15% increase in company turnover specifically attributed to furniture sales.\
        Played a crucial role in bug-fixing for both front-end and back-end applications, leading to a 20% reduction in\
        the number of customer issues escalated. This significantly enhanced the overall customer experience.",
        tech: ["Java", "Spring Boot", "React", "MySQL"]
    }
]

const projectData : Array<ProjectItem> = [
    {
        name: "Synthetic Data Generation with Diffusion Models",
        time: "Jan 2023 - Apr 2023",
        desc: "Led a collaborative research initiative to produce high-quality synthetic datasets for CIFAR-10, ImageNet, and\
        a melanoma-focused medical dataset, achieving exceptional Inception Score (IS) and Fréchet Inception Distance\
        (FID) scores.\
        Recognized for innovation, winning the university’s prestigious Innovation Prize and a $2,500 award.",
        link: "https://www.sfu.ca/computing/current-students/graduate-students/academic-programs/professional-master-of-science-in-computer-science/project-showcase/is-seeing-still-not-necessarily-believing-.html"
    },
    {
        name: "Parkinson’s disease diagnosis using hand motion detection",
        time: "May 2021 - Sept 2021",
        desc: "Developed a Parkinson’s disease diagnostic system that utilizes hand motion detection and computer vision\
        techniques such as Faster R-CNN and ResNet18.\
        Constructed a dataset containing over 2000 annotated images of hand keypoints using the DeepLabCut tool.\
        Achieved low finger recognition error rate of less than 20 pixels, demonstrating high recognition accuracy with\
        images sized 1024 × 1024."
    }
]

const navItems: Array<{
    label: string,
    link: string,
    icon: IconType,
}> = [
        {
            label: "Experience",
            link: "#experience",
            icon: MdWork

        },
        {
            label: "Projects",
            link: "#projects",
            icon: MdOutlineComputer,
        }
    ]



export { navItems, experienceData, projectData };