
import Intro from "@/components/introduction/intro";
import CursorFocus from "@/components/site/cursorfocus";

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] grid place-content-center relative">
      <Intro />
      <CursorFocus/>
    </div>
  );
}
