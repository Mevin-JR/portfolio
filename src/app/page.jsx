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
