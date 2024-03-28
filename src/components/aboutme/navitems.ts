import { IconType } from "react-icons/lib";
import { MdWork, MdOutlineComputer } from "react-icons/md";

export type ExperienceItem = {
    role: string,
    time: string,
    desc: string,
    tech: Array<string>
}


const experienceData: Array<ExperienceItem> = [
    {
        role: "Junior Data Analyst Co-op",
        time: "May 2023 - Aug 2023",
        desc: "Authored a manuscript for a peer-reviewed research paper that will be published on Nature Scientific Data,\
        actively contributing to the cited research in the data science community.\
        Implemented an ETL pipeline using Python, resulting in a 50% increase in data acquisition speed and a 25%\
        reduction in processing time, ensuring continuous updates to the dataset.",
        tech: ["Python", "Pandas", "boto3"]
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



export { navItems, experienceData };