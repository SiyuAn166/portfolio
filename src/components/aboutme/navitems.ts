
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

export type EducationItem = {
    school: string,
    time: string,
    major: string,
    gpa: string
}

const experienceData: Array<ExperienceItem> = [
    {
        role: "Data Engineer Co-op",
        time: "May 2023 - Aug 2023",
        desc: "Co-authoring a manuscript for a peer-reviewed research paper destined for Nature Scientific Data, we made substantial contributions to advancing research methodologies and insights in the data science community. By implementing a Python-based ETL pipeline, we accelerated data acquisition by 50% and cut processing time by 25%, bolstering real-time data analysis capabilities and operational efficiency. Our development of a web API client integrating SOAP APIs facilitated seamless communication between systems, reducing manual data handling errors by 30% and optimizing user experience, thereby streamlining business operations.",
        tech: ["Python", "Pandas", "boto3", "SOAP API"]
    },
    {
        role: "Full Stack Developer",
        time: "Mar 2019 - Oct 2019",
        desc: "As a Full Stack Engineer at Best Energy Equipment China from March to October 2019, I redesigned architecture, integrated MQTT, and cut costs by 7%. Vue.js apps boosted revenue by 15%, RESTful APIs reduced integration time by 30%, and Docker deployment minimized errors by 25%. Collaborating closely with teams, API design improvements slashed project delivery time by 20%. My focus was driving innovation and efficiency, achieving tangible results.",
        tech: ["Java", "Spring Boot", "Vue.js", "Vuex", "MQTT", "MySQL", "RabbitMQ"]
    },
    {
        role: "Software Engineer",
        time: "Mar 2018 - Mar 2019",
        desc: "I spearheaded the creation of a robust Kubernetes controller using Golang and Kubebuilder, cutting operation time by 50%. By integrating automated security scans through Jobs and CronJobs, I bolstered Kubernetes security, improving threat detection by 40%. Development efficiency soared with security check time reduced from 5 hours to 1.5 hours, accelerating release cycles by 20%. Additionally, I implemented a self-healing mechanism within the controller, slashing downtime by 25% and operational costs by 20%.",
        tech: ["Java", "Spring Boot", "React", "MySQL"]
    }
]

const projectData: Array<ProjectItem> = [
    {
        name: "Data Augmentation with Diffusion Models",
        time: "Jan 2023 - Apr 2023",
        desc: "Led a collaborative research initiative to produce high-quality synthetic datasets for CIFAR-10, ImageNet, and a melanoma-focused medical dataset, achieving exceptional Inception Score (IS) and Fréchet Inception Distance (FID) scores. Recognized for innovation, winning the university’s prestigious Innovation Prize and a $2,500 award.",
        link: "https://www.sfu.ca/computing/current-students/graduate-students/academic-programs/professional-master-of-science-in-computer-science/project-showcase/is-seeing-still-not-necessarily-believing-.html"
    },
    {
        name: "Parkinson’s disease diagnosis using hand motion detection",
        time: "May 2021 - Sept 2021",
        desc: "Developed a Parkinson’s disease diagnostic system that utilizes hand motion detection and computer vision\
        techniques such as Faster R-CNN and ResNet18. Constructed a dataset containing over 2000 annotated images of hand keypoints using the DeepLabCut tool. Achieved low finger recognition error rate of less than 20 pixels, demonstrating high recognition accuracy with images sized 1024 × 1024."
    }
]

const educationData: Array<EducationItem> = [
    {
        school: "Simon Fraser University",
        time: "Sep 2022 - Jan 2024",
        major: "Master of Science in Professional Computer Science",
        gpa: "4.0"
    },
    {
        school: "University of Leeds",
        time: "Sep 2020 - Nov 2021",
        major: "Master of Science in Data Science and Analytics",
        gpa: "2:1 Distinction"
    },
    {
        school: "Hebei University of Architecture",
        time: "Sep 2013- Jul 2017",
        major: "Bachelor of Engineering in Materials Science",
        gpa: "3.7"
    }
]

const navItems: Array<{
    label: string,
    link: string,
}> = [
        {
            label: "About Me",
            link: "#aboutme"
        },
        {
            label: "Experience",
            link: "#experience",

        },
        {
            label: "Projects",
            link: "#projects",
        },
        {
            label: "Education",
            link: "#education"
        }
    ]



export { navItems, experienceData, projectData, educationData };
