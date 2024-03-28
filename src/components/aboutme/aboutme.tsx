import { Badge } from "../ui/badge"
import NavBar from "./navbar"
import {experienceData} from "./navitems"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function AboutMe() {
    return (
        <div className="flex w-full md:w-auto h-screen">
            <div className="flex w-1/5">
                <NavBar />
            </div>
            <div className="w-3/5 md:w-4/5 animate-fade-up animate-ease-in-out">
                <section id="experience" key="#experience" className="grid place-items-center">
                    {experienceData.map(d => (
                        <Card className="w-3/5 mt-5 mb-10 py-10 drop-shadow-lg" key={Math.random().toString(36).substring(7)}>
                            <CardHeader>
                                <CardTitle>{d.role}</CardTitle>
                                <CardDescription>{d.time}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{d.desc}</p>
                            </CardContent>
                            <CardFooter className="flex-wrap justify-start gap-4">
                                {d.tech.map(t=>(
                                    <Badge key={t} variant="outline" className="bg-[#41cc92] bg-opacity-70 text-opacity-50 text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </section>
                <section id="projects" className="h-[800px] bg-red-500">
                    Projects
                </section>
            </div>
        </div>
    )
}