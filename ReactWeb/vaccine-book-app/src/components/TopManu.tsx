import Image from "next/image";
import TopManuItem from "./TopManuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-12 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row-reverse border-b border-gray-400">
      <Image
        src={"/img/vaccine-6592893_1280.png"}
        className="h-full w-auto"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopManuItem title="Booking" pageRef="/booking" />
      <div className="flex flex-row absolute left-0 h-full">
        {session ? (
          <Link href="api/auth/signout">
            <div className="flex items-center h-full px-2 text-cyan-600 text-sm bg-neutral-200 font-semibold">
              Sign-Out
            </div>
          </Link>
        ) : (
          <Link href="api/auth/signin">
            <div className="flex items-center  h-full px-2 text-cyan-600 text-sm bg-neutral-200 font-semibold">
              Sign-In
            </div>
          </Link>
        )}
        <TopManuItem title="My Booking" pageRef="/mybooking" />
      </div>
    </div>
  );
}
