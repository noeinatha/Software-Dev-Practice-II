import Image from "next/image";
import TopManuItem from "./TopManuItem";

export default function TopManu() {
  return (
    <div className="h-[50px] bg-white fixed top-0 right-0 left-0 z-30 border-2 border-solid border-gray-400 flex flex-row-reverse">
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
