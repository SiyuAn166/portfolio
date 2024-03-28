import AboutMeContent from "./content"
import NavBar from "./navbar"



export default function AboutMe() {
    return (
        <div className="flex w-full md:w-auto h-screen">
            <div className="flex w-1/5">
                <NavBar />
            </div>
            <div className="w-3/5 md:w-4/5 animate-fade-up animate-ease-in-out">
                <AboutMeContent />
            </div>

        </div>
    )
}