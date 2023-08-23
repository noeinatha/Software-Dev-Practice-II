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
        <h1>Your Travel Partner</h1>
        <h3>Travel Your World with Us</h3>
      </div>
    </div>
  );
}
