import Image from "next/image";
import TopManuItem from "./TopManuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[50px] bg-white fixed top-0 right-0 left-0 z-30 border-2 border-solid border-gray-400 flex flex-row-reverse">
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center absolute left-0 h-full px-2 text cyan-600 text-sm">
            Sign-Out of {session.user?.name}
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center absolute left-0 h-full px-2 text cyan-600 text-sm">
            Sign-In
          </div>
        </Link>
      )}

      <Image
        src={"/img/vaccine-6592893_1280.png"}
        className="h-[46px] w-auto"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      ></Image>
      <TopManuItem title="Booking" pageRef="/booking"></TopManuItem>
    </div>
  );
}
