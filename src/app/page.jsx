import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      {/* Background Grid Layer */}
      <div
        className="fixed inset-0 -z-10 animate-float_up
        [background-size:20px_20px]
        [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Foreground Content */}
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
        <Main />
      </main>
    </>
  );
}
