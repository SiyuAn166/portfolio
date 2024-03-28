
import Intro from "@/components/introduction/intro";
import CursorFocus from "@/components/site/cursorfocus";
import HomeFooter from "@/components/site/homefooter";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-64px)] grid place-content-center">
      <Intro />
      <CursorFocus />
      <HomeFooter/>
    </div>
  );
}
