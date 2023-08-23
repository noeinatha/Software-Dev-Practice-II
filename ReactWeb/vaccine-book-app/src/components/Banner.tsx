import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1>บริการฉีดวัคซีน</h1>
        <h3>โรงพยาบาล Software Development Practice II</h3>
      </div>
    </div>
  );
}
