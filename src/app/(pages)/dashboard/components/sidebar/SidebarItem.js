"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ icon, path, title }) {
  const pathName = usePathname();

  return (
    <>
      <li>
        <Link
          href={path}
          className={`
          relative px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r
          hover:text-white hover:from-sky-600 hover:to-cyan-400
          ${
            path === pathName
              ? "text-white from-sky-600 to-cyan-400"
              : "text-gray-600 from-sky-50 to-sky-100"
          }
          `}
        >
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  );
}
