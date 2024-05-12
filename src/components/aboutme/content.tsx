import { Badge } from "../ui/badge"
import Link from "next/link"
import { experienceData, projectData, educationData } from "./navitems"
import { BiLinkExternal } from "react-icons/bi";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AboutMeContent() {

    return (
        <section className="w-full md:w-5/6">
            <section id="aboutme" key="#aboutme" className="flex flex-wrap pt-16">
                <div className="sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden">
                    <strong className="p-3 ml-3 text-2xl">About Me</strong>
                </div>
                <div className="w-full md:w-11/12 pl-6 ">

                    <p className="mb-3">
                        Experienced and results-driven software developer with 3 years of expertise in Full Stack Development.
                        Proven ability to build robust and scalable applications using Java and Python,
                        with a focus on creating intuitive and visually appealing user interfaces.
                        Skilled in front-end technologies such as HTML, CSS, and  JavaScript, along with frameworks like React, Next.js.
                        Strong communicator and collaborator,  seeking to contribute value to a forward-thinking team or organization.
                    </p>
                    <p className="mb-3">
                        My journey into software development commenced in 2015, driven by a passion for technology and a desire to create.
                        Beginning with self-taught Java programming, I embarked on a path that would shape my career.
                        In 2017, I officially entered the realm of professional software development as a Java Software Developer.
                    </p>
                    <p className="mb-3">
                        In my role, I honed my skills in crafting robust backend applications utilizing frameworks like Spring Boot,
                        alongside database management with MyBatis and MySQL. Specializing in architecting RESTful APIs,
                        I found joy in constructing systems that seamlessly communicated and delivered data.
                    </p>
                    <p>
                        Driven by a hunger for knowledge and a commitment to growth, I decided to pursue further education in Computer Science
                        at Simon Fraser University in Canada.
                        During my tenure at SFU, my focus shifted towards emerging technologies in Deep Learning and Computer Vision.
                        Delving into these cutting-edge fields, I expanded my understanding of artificial intelligence and its applications,
                        paving the way for new opportunities and challenges in my journey as a developer.
                    </p>
                </div>
            </section>
            <section id="experience" key="#experience" className="flex flex-wrap pt-16">
                <div className="sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden">
                    <strong className="p-3 ml-3 text-2xl">Experience</strong>
                </div>
                {experienceData.map((d, index) => (
                    <Card className="w-full mb-12 bg-transparent border-none shadow-transparent
                        transition duration-300 ease-in-out dark:hover:bg-slate-800/50 hover:bg-white/50 hover:shadow-xl"
                        key={d.role + index}
                    >
                        <CardHeader>
                            <CardTitle>{d.role}</CardTitle>
                            <CardDescription>{d.time}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{d.desc}</p>
                        </CardContent>
                        <CardFooter className="flex-wrap justify-start gap-4 bg-transparent">
                            {d.tech.map(t => (
                                <Badge key={t} variant="outline" className="text-opacity-50 text-xs bg-[#41cc92] bg-opacity-70">
                                    {t}
                                </Badge>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </section>


            <section id="projects" className="flex flex-wrap pt-16">
                <div className="sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden">
                    <strong className="p-3 ml-3 text-2xl">Projects</strong>
                </div>

                {projectData.map((el) => (
                    <Card className="w-full mb-12 bg-transparent border-none shadow-transparent
                        transition duration-300 ease-in-out dark:hover:bg-slate-800/50 hover:bg-white/50 hover:shadow-xl"
                        key={el.name}>
                        <CardHeader>
                            <CardTitle>{el.name}</CardTitle>
                            <CardDescription>{el.time}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{el.desc}</p>
                        </CardContent>
                        <CardFooter className="flex-wrap justify-end gap-4">
                            {el.link &&
                                (<Link href={el.link}
                                    className="flex justify-start items-center gap-1 text-sm underline transition duration-500 hover:text-sky-700"
                                    target="_blank"
                                >
                                    Project Page <BiLinkExternal />
                                </Link>)}
                        </CardFooter>
                    </Card>
                ))}
            </section>


            <section id="education" key="#education" className="pt-16 pb-96">
                <div className="sticky top-0 backdrop-blur z-10 py-3 mb-10 w-full md:hidden">
                    <strong className="p-3 ml-3 text-2xl">Education</strong>
                </div>
                <Accordion type="single" collapsible className="w-full px-5">
                    {
                        educationData.map((data, index) => (
                            <AccordionItem value={"item" + index} key={index}>
                                <AccordionTrigger>
                                    <div className="flex justify-between w-full">
                                        <div className="w-1/3 text-left">{data.school}</div>
                                        <div className="w-1/4 text-left">{data.time}</div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div>{data.major}</div>
                                    <div>GPA:&nbsp;{data.gpa}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }

                </Accordion>
            </section>
        </section>

    )
}