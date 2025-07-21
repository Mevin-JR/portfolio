import BgDotGrid from "@/components/bgDotGrid";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import OrbColors from "@/components/orbColors";

export default function Home() {
  return (
    <>
      {/* Background Grid Layer */}
      <BgDotGrid />

      {/* Foreground Content */}
      <Navbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <Main />
        <OrbColors />
      </main>
    </>
  );
}
