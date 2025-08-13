"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({
  children,
  text = "This is a tooltip",
  bgColor = "#000",
  textColor = "#fff",
  position = "top",
  gap = "15px",
}) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef(null);

  const showTooltip = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();

      let x = rect.left + rect.width / 2;
      let y = rect.top + rect.height / 2;

      switch (position) {
        case "top":
          y = rect.top - parseInt(gap);
          break;
        case "bottom":
          y = rect.bottom + parseInt(gap);
          break;
        case "left":
          x = rect.left - parseInt(gap);
          break;
        case "right":
          x = rect.right + parseInt(gap);
          break;
      }

      setCoords({ x, y });
    }
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  const getTransform = () => {
    switch (position) {
      case "top":
        return "translate(-50%, -100%)";
      case "bottom":
        return "translate(-50%, 0)";
      case "left":
        return "translate(-100%, -50%)";
      case "right":
        return "translate(0, -50%)";
      default:
        return "translate(-50%, -100%)";
    }
  };

  return (
    <>
      <span
        ref={wrapperRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={{ display: "inline-block" }}
      >
        {children}
      </span>

      {visible &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: coords.y,
              left: coords.x,
              transform: getTransform(),
              background: bgColor,
              color: textColor,
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
}
