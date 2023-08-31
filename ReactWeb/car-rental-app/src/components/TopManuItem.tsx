import Link from "next/link";
import styles from "./topmanu.module.css";

export default function TopManuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link href={pageRef} className={styles.itemcontainer}>
      {title}
    </Link>
  );
}
