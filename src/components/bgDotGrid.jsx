export default function BgDotGrid() {
  return (
    <div
      className="fixed inset-0 -z-10 animate-float_up
                [background-size:20px_20px]
                [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]
                dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
