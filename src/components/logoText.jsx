export default function LogoText({ size = 24 }) {
  return (
    <h1
      className="font-semibold flex gap-[2px] items-end cursor-pointer"
      style={{ fontSize: size }}
    >
      <a href="#">MJR</a>
      <span className="text-sm text-cyan-400 mb-[3px] md:mb-[2px]">■</span>
    </h1>
  );
}
