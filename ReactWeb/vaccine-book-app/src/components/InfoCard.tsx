import styles from "@/components/infocard.module.css";
import Image from "next/image";

export function InfoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/info1.jpg"}
          alt="Vaccine Infomation"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>What it Vaccine?</div>
    </div>
  );
}
