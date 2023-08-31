import styles from "./topmanu.module.css";
import Image from "next/image";
import TopManuItem from "./TopManuItem";

export default function TopManu() {
  return (
    <div className={styles.manucontainer}>
      <Image
        src={"/img/logo.png"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      ></Image>
      <TopManuItem title="Reservations" pageRef="/reservations"></TopManuItem>
      <TopManuItem title="About" pageRef="/about"></TopManuItem>
    </div>
  );
}
