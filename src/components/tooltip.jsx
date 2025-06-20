import "./tooltip.css";

export default function Tooltip({
  children,
  text,
  bgColor = "#000",
  textColor = "#fff",
  position = "top",
}) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-children">{children}</div>
      <div
        className={`tooltip-text ${position}`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </div>
    </div>
  );
}
