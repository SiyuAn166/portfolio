
import Intro from "@/components/introduction/intro";
import HomeFooter from "@/components/site/homefooter";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-64px)] grid place-content-center">
      <Intro />
      <HomeFooter/>
    </div>
  );
}
