
"use client";

import Image from "next/image";

import {
  TriangleAlert,
  PackageCheck,
  Search,
  Boxes,
} from "lucide-react";

export default function HomePage() {

  return (

    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div
        className="
          fixed inset-0 -z-20

          bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_30%),linear-gradient(to_bottom,#081107,#101c0f,#050505)]
        "
      />

      {/* FLOATING GLOW */}
      <div
        className="
          pointer-events-none

          fixed
          top-[-120px]
          left-[-120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/10

          blur-[120px]

          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none

          fixed
          bottom-[-150px]
          right-[-150px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-yellow-300/10

          blur-[120px]

          animate-pulse
        "
      />

      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div
              className="
                flex h-24 w-24 items-center justify-center

                rounded-[30px]

                border border-white/10

                bg-white/10

                backdrop-blur-3xl

                shadow-[0_0_40px_rgba(255,255,255,0.08)]

                transition-all
                duration-700

                hover:scale-105
              "
            >

              <Image
                src="/ตราเทพศิรินทร์.png"
                alt="Debsirin School"
                width={70}
                height={70}
                className="object-contain"
              />

            </div>

            <div>

              <h1
                className="
                  bg-gradient-to-b
                  from-white
                  to-white/70

                  bg-clip-text

                  text-3xl
                  font-black
                  text-transparent

                  md:text-4xl
                "
              >
                โรงเรียนเทพศิรินทร์
              </h1>

              <p className="mt-1 text-lg text-emerald-200/70">
                Debsirin School
              </p>

            </div>

          </div>

          <button
            className="
              h-16
              w-16

              rounded-full

              border border-white/10

              bg-white/5

              text-2xl
              text-white/70

              backdrop-blur-3xl

              shadow-[0_0_30px_rgba(255,255,255,0.06)]

              transition-all
              duration-500

              hover:scale-105
              hover:bg-white/10
            "
          >
            ☰
          </button>

        </div>

        {/* HERO */}
        <div className="mt-20 text-center">

          <div className="flex justify-center">

            <div
              className="
                relative

                flex
                h-44
                w-44

                animate-[float_6s_ease-in-out_infinite]

                items-center
                justify-center

                rounded-[44px]

                border border-white/10

                bg-white/5

                backdrop-blur-3xl

                shadow-[0_0_90px_rgba(34,197,94,0.16)]
              "
            >

              {/* REFLECTION */}
              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  rounded-[44px]

                  bg-gradient-to-br
                  from-white/20
                  via-transparent
                  to-transparent
                "
              />

              <Image
                src="/assets/DS Lost and Found logo.png"
                alt="DSLF Logo"
                width={120}
                height={120}
                className="object-contain"
              />

            </div>

          </div>

          {/* DSLF */}
          <h1
            className="
              mt-12

              bg-gradient-to-b
              from-white/90
              via-white/40
              to-white/10

              bg-clip-text

              text-7xl
              font-black

              tracking-[0.12em]

              text-transparent

              drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]

              md:text-9xl
            "
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.18)",
            }}
          >
            DSLF
          </h1>

          <p className="mt-5 text-lg text-white/45 md:text-xl">
            Debsirin School Lost & Found
          </p>

        </div>

        {/* SEARCH */}
        <div className="mt-14">

          <div
            className="
              relative

              flex
              items-center

              overflow-hidden

              rounded-[40px]

              border border-white/10

              bg-white/5

              px-7
              py-6

              backdrop-blur-3xl

              shadow-[0_0_60px_rgba(34,197,94,0.10)]

              transition-all
              duration-500

              hover:bg-white/[0.07]
            "
          >

            {/* REFLECTION */}
            <div
              className="
                pointer-events-none

                absolute
                inset-0

                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent

                opacity-40
              "
            />

            <Search
              size={26}
              className="relative z-10 text-white/35"
            />

            <input
              type="text"
              placeholder="Search lost or found items..."
              className="
                relative
                z-10

                ml-5
                w-full

                bg-transparent

                text-lg
                text-white

                outline-none

                placeholder:text-white/25
              "
            />

          </div>

        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-2 gap-6">

          {[
            {
              href: "/report-lost",
              title: "แจ้งของหาย",
              subtitle: "Report lost item",
              icon: TriangleAlert,
              color: "yellow",
            },

            {
              href: "/report-found",
              title: "แจ้งของเก็บได้",
              subtitle: "Report found item",
              icon: PackageCheck,
              color: "emerald",
            },

            {
              href: "/lost-items",
              title: "ดูรายการของหาย",
              subtitle: "Lost items feed",
              icon: Search,
              color: "white",
            },

            {
              href: "/found-items",
              title: "ดูรายการของเก็บได้",
              subtitle: "Found items feed",
              icon: Boxes,
              color: "white",
            },

          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <a
                key={index}
                href={item.href}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[38px]

                  border border-white/10

                  bg-white/5

                  p-7

                  backdrop-blur-3xl

                  shadow-[0_0_50px_rgba(255,255,255,0.06)]

                  transition-all
                  duration-500

                  hover:scale-[1.03]
                  hover:bg-white/[0.07]
                "
              >

                {/* REFLECTION */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent

                    opacity-60
                  "
                />

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-full

                    border border-white/10

                    bg-white/10

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    group-hover:scale-110
                  "
                >

                  <Icon
                    size={36}
                    className="
                      text-white

                      drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]
                    "
                  />

                </div>

                <h2
                  className="
                    relative
                    z-10

                    mt-8

                    text-2xl
                    font-bold
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                    relative
                    z-10

                    mt-2

                    text-white/45
                  "
                >
                  {item.subtitle}
                </p>

              </a>

            );

          })}

        </div>

        <div className="h-40" />

      </div>

      {/* FLOAT ANIMATION */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

    </main>
  );

}
