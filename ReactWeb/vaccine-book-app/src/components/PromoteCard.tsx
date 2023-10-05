"use client";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] p-2 rounded-lg bg-gray-200 flex flex-row">
      <VideoPlayer
        vdoSrc="/video/getvaccine.mp4"
        isPlaying={playing}
      ></VideoPlayer>

      <div className="text-lg m-5">
        Get your vaccine today.
        <button
          className="block rounded-lg bg-sky-600 hover:bg-indigo-600 px-3 py-2 my-5 text-white shadow-sm"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
