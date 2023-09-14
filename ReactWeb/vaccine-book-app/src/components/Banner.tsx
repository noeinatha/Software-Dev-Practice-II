"use client";
import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const cover = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div
      className="w-screen h-[40vh] p-20 mt-0 relative block flex justify-center items-top"
      onClick={() => setIndex(index + 1)}
    >
      <Image
        src={cover[index % 4]}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className="w-fit h-fit relative text-center z-20 bg-white rounded-lg">
        <h1 className="pt-[10px] text-4xl font-medium">บริการจองวัคซีน</h1>
        <h3 className="pb-[10px] pl-[20px] pr-[20px] text-xl font-serif">
          เครือโรงพยาบาล Software Development Practice II
        </h3>
      </div>
    </div>
  );
}
