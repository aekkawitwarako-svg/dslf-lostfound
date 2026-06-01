"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {

  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: "🏠",
    },

    {
      href: "/lost-items",
      label: "Lost",
      icon: "🔍",
    },

    {
      href: "/found-items",
      label: "Found",
      icon: "📦",
    },

    {
      href: "/admin",
      label: "Admin",
      icon: "🛡",
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-md
      "
    >

      <div
        className="
          flex
          items-center
          justify-around
          bg-white/10
          backdrop-blur-3xl
          border
          border-white/10
          rounded-[32px]
          px-3
          py-3
          shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        "
      >

        {navItems.map((item) => {

          const active = pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                flex-col
                items-center
                justify-center
                px-5
                py-3
                rounded-2xl
                transition
                min-w-[72px]

                ${
                  active
                    ? "bg-white/15 scale-105"
                    : "hover:bg-white/10"
                }
              `}
            >

              <div className="text-2xl">
                {item.icon}
              </div>

              <div
                className={`
                  text-xs
                  mt-1
                  font-semibold

                  ${
                    active
                      ? "text-white"
                      : "text-gray-300"
                  }
                `}
              >
                {item.label}
              </div>

            </Link>

          );

        })}

      </div>

    </div>
  );

}