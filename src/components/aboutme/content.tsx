import { Badge } from "../ui/badge"
import Link from "next/link"
import { experienceData, projectData } from "./navitems"
import { BiLinkExternal } from "react-icons/bi";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function AboutMeContent() {

    return (
        <>
            <section id="experience" key="#experience" className="grid place-items-center mb-60">
                {experienceData.map((d, index) => (
                    <Card className="w-full md:w-3/5 mt-5 mb-10 py-10 bg-transparent border-none shadow-transparent
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
            <section id="projects" className="grid place-items-center mb-60">
                {projectData.map((el) => (
                    <Card className="w-full md:w-3/5 mt-5 mb-10 py-10 bg-transparent border-none shadow-transparent
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
        </>

    )
}