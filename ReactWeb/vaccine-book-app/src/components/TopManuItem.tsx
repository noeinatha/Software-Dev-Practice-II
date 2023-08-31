import Link from "next/link";

export default function TopManuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      className="w-[120px] text-center mt-auto mb-auto font-sans text-gray-400"
    >
      {title}
    </Link>
  );
}
