import BackToTop from "../site/back-to-top"
import AboutMeContent from "./content"
import NavBar from "./navbar"



export default function AboutMe() {
    return (
        <div className="md:flex w-full md:w-auto h-screen">
            <div className="hidden md:flex md:w-1/5">
                <NavBar />
            </div>
            <div className="w-full md:w-4/5 animate-fade-up animate-ease-in-out">
                <AboutMeContent />
            </div>
            <BackToTop/>
        </div>
    )
}