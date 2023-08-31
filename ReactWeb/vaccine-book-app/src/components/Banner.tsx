import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-screen h-[40vh] p-20 mt-0 relative block">
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className="relative text-center z-20">
        <h1 className="text-4xl font-medium">บริการจองวัคซีน</h1>
        <h3 className="text-xl font-serif">
          เครือโรงพยาบาล Software Development Practice II
        </h3>
      </div>
    </div>
  );
}
