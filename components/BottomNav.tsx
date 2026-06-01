
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
        bottom-6
        left-1/2
        -translate-x-1/2

        z-50

        w-[92%]
        max-w-sm
      "
    >

      <div
        className="
          relative

          flex
          items-center
          justify-around

          rounded-full

          border
          border-white/10

          bg-white/[0.04]

          px-3
          py-3

          backdrop-blur-[40px]

          shadow-[0_0_50px_rgba(34,197,94,0.10)]
        "
      >

        {/* GLASS HIGHLIGHT */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-full

            bg-gradient-to-b
            from-white/10
            to-transparent

            opacity-60
          "
        />

        {navItems.map((item) => {

          const active = pathname === item.href;

          const Icon = item.icon;

          return (

            <Link
              key={item.href}
              href={item.href}
              className="
                relative

                flex
                flex-col
                items-center
                justify-center
              "
            >

              {/* ACTIVE GLASS */}
              {active && (

                <div
                  className="
                    absolute

                    -inset-2

                    rounded-3xl

                    border
                    border-emerald-400/15

                    bg-emerald-400/10

                    backdrop-blur-2xl

                    shadow-[0_0_40px_rgba(34,197,94,0.18)]
                  "
                />

              )}

              {/* ICON */}
              <div
                className={`
                  relative
                  z-10

                  flex
                  items-center
                  justify-center

                  w-14
                  h-14

                  rounded-full

                  transition-all
                  duration-500

                  ${
                    active
                      ? `
                        bg-white/10
                        backdrop-blur-xl
                      `
                      : `
                        bg-transparent
                      `
                  }
                `}
              >

                <Icon
                  size={24}
                  strokeWidth={2.2}
                  className={`
                    transition-all
                    duration-500

                    ${
                      active
                        ? `
                          text-white

                          drop-shadow-[0_0_14px_rgba(255,255,255,0.7)]
                        `
                        : `
                          text-white/45
                        `
                    }
                  `}
                />

              </div>

              {/* LABEL */}
              <span
                className={`
                  relative
                  z-10

                  mt-1

                  text-[11px]
                  font-medium

                  transition-all
                  duration-500

                  ${
                    active
                      ? `
                        text-white
                      `
                      : `
                        text-white/35
                      `
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
