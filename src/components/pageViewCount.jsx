"use client";

import { fetchPageViewCount } from "@/helperFunctions";
import Image from "next/image";
import { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";
import Tooltip from "./tooltip";

export default function PageViewCount() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const unsub = fetchPageViewCount(setViewCount);
    return () => unsub();
  }, []);

  return (
    <div className="fixed bottom-5 left-5 flex gap-2 items-center">
      <Image
        src="/icons/animated/eye_look_around.gif"
        alt="Eye gif"
        width={25}
        height={25}
        priority
        unoptimized
      />
      <Tooltip
        text="Portfolio Views"
        textColor="#9CA3AF"
        bgColor="transparent"
        position="top"
      >
        <FlipNumbers
          height={18}
          width={14}
          color="#9CA3AF"
          background="transparent"
          play
          numbers={viewCount.toLocaleString("en-IN")}
        />
      </Tooltip>
    </div>
  );
}
