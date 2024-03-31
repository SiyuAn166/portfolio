import AboutMeContent from "./content"
import NavBar from "./navbar"

export default function AboutMe() {
    return (
        <div className="flex w-full md:w-auto h-full mt-60">
            <AboutMeContent />
            <NavBar />
        </div>
    )
}