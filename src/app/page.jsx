import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 z-0
          absolute inset-0 animate-float_up transition-transform duration-200 ease-out
          [background-size:20px_20px]
          [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]
          dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      >
        {/* Grid fade effect */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <Main />
      </div>
    </>
  );
}
