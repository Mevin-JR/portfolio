import Link from "next/link";

export default function LogoText({ size = 24 }) {
  return (
    <h1
      className="font-semibold flex gap-[2px] items-end cursor-pointer"
      style={{ fontSize: size }}
    >
      <Link href="#">MJR</Link>
      <span className="text-sm text-cyan-400 mb-[3px] md:mb-[2px]">■</span>
    </h1>
  );
}
