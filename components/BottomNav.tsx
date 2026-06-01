"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Search,
  Package,
  Shield,
} from "lucide-react";

export default function BottomNav() {

  const pathname = usePathname();

  const navItems = [

    {
      href: "/",
      label: "Home",
      icon: House,
    },

    {
      href: "/lost-items",
      label: "Lost",
      icon: Search,
    },

    {
      href: "/found-items",
      label: "Found",
      icon: Package,
    },

    {
      href: "/admin",
      label: "Admin",
      icon: Shield,
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

        w-[94%]
        max-w-md
      "
    >

      <div
        className="
          flex
          items-center
          justify-around

          rounded-[34px]

          border
          border-white/10

          bg-white/5

          backdrop-blur-3xl

          px-3
          py-3

          shadow-[0_8px_40px_rgba(255,255,255,0.08)]
        "
      >

        {navItems.map((item) => {

          const active = pathname === item.href;

          const Icon = item.icon;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                flex-col
                items-center
                justify-center

                rounded-[26px]

                px-5
                py-3

                transition-all
                duration-300

                ${
                  active
                    ? `
                      bg-white/10

                      border
                      border-white/15

                      scale-105

                      shadow-[0_0_30px_rgba(255,255,255,0.14)]
                    `
                    : `
                      hover:bg-white/5
                    `
                }
              `}
            >

              <div
                className={`
                  flex
                  items-center
                  justify-center

                  w-12
                  h-12

                  rounded-2xl

                  border

                  backdrop-blur-xl

                  ${
                    active
                      ? `
                        bg-white/10
                        border-white/15
                      `
                      : `
                        bg-white/5
                        border-white/10
                      `
                  }
                `}
              >

                <Icon
                  size={24}
                  strokeWidth={2.2}
                  className={`
                    transition-all

                    ${
                      active
                        ? `
                          text-white

                          drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                        `
                        : `
                          text-white/60
                        `
                    }
                  `}
                />

              </div>

              <span
                className={`
                  mt-2
                  text-[11px]
                  font-medium

                  ${
                    active
                      ? "text-white"
                      : "text-white/50"
                  }
                `}
              >
                {item.label}
              </span>

            </Link>

          );

        })}

      </div>

    </div>

  );

}