
import Intro from "@/components/introduction/intro";
import AboutMe from "@/components/aboutme/aboutme";
import HomeFooter from "@/components/site/homefooter";
import BackToTop from "@/components/site/back-to-top";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Intro />
      <AboutMe/>
      <HomeFooter/>
      <BackToTop/>
    </div>
  );
}
