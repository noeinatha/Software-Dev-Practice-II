import styles from "./topmanu.module.css";
import Image from "next/image";
import TopManuItem from "./TopManuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopManu() {
  const session = await getServerSession(authOptions);

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

      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex item-center absolute right-0 h-full p-2 text-cyan-600 text-md">
            Sign-Out of {session.user?.name}
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex item-center absolute right-0 h-full p-2 text-cyan-600 text-md">
            Sign-In
          </div>
        </Link>
      )}
    </div>
  );
}
