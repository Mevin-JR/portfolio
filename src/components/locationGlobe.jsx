"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import LiveClock from "./liveClock";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function LocationGlobe({ size = 500 }) {
  const [globeImage, setGlobeImage] = useState(
    "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
  );
  const [activeGlobe, setActiveGlobe] = useState("Satellite");

  const globeRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const zoomInterval = setInterval(() => {
      if (globeRef.current && globeRef.current.controls()) {
        globeRef.current.controls().enableZoom = false;
        clearInterval(zoomInterval);
      }
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && globeRef.current) {
            globeRef.current.pointOfView(
              { lat: 35, lng: -6.2603, altitude: 1.5 },
              2000,
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearInterval(zoomInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[450px] xl:h-full w-full xl:w-[450px] bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-4 rounded-lg 
      flex flex-col gap-5 items-center overflow-hidden"
    >
      <h2 className="sm:text-xl text-center font-bold mt-5 bg-gradient-to-b from-white via-cyan-400 to-cyan-400 bg-clip-text text-transparent">
        Comfortable working across multiple time zones
      </h2>
      <div className="flex gap-4">
        <div
          className={`text-sm px-2 py-1 backdrop-blur-sm shadow-md rounded-md cursor-pointer
            ${
              activeGlobe === "Satellite"
                ? "bg-[#0f1c2f] text-[#266dda]"
                : "bg-white/5"
            }`}
          onClick={() => {
            setGlobeImage(
              "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
            );
            setActiveGlobe("Satellite");
          }}
        >
          Satellite
        </div>
        <div
          className={`text-sm px-2 py-1 backdrop-blur-sm shadow-md rounded-md cursor-pointer
            ${
              activeGlobe === "Dotted"
                ? "bg-[#0f1c2f] text-[#266dda]"
                : "bg-white/5"
            }`}
          onClick={() => {
            setGlobeImage("/dotted_earth.png");
            setActiveGlobe("Dotted");
          }}
        >
          Dotted
        </div>
      </div>
      <LiveClock />
      <div className="z-10 absolute -bottom-52 left-1/2 -translate-x-1/2">
        <Globe
          ref={globeRef}
          width={size}
          height={size}
          globeImageUrl={globeImage}
          backgroundColor="rgba(0,0,0,0)"
          labelsData={[
            {
              lat: 53.3498,
              lng: -6.2603,
              text: "Currently in Ireland",
            },
          ]}
          labelSize={1.5}
          labelDotRadius={1}
          labelColor={() => "#facc15"}
        />
      </div>
    </div>
  );
}
