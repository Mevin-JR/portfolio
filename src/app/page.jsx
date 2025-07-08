// FIXME: Dirty fix for an annoying issue involving some version incompatibilities,
// Change into a better fix (or check if its resolved by nextjs & affected libs)
if (!Promise.withResolvers) {
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

import Main from "@/components/main";
import Navbar from "@/components/navbar";
import OrbColors from "@/components/orbColors";

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
      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <Main />
        <OrbColors />
      </main>
    </>
  );
}
