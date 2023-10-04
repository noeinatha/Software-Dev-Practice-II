"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  const cover = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={cover[index % 3]}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">Your Travel Partner</h1>
        <h3 className="text-xl font-serif">Travel Your World with Us</h3>
      </div>
      <button
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:boder-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/car");
        }}
      >
        Select Your Partner NOW
      </button>
    </div>
  );
}
