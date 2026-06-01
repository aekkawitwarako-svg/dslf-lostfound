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

    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="
          fixed
          inset-0
          -z-10

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(to_bottom,#050505,#0a0a0a)]
        "
      />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* LOGO */}
        <div className="flex justify-center">

          <div
            className="
              relative

              w-36
              h-36

              rounded-[40px]

              bg-white/10

              border
              border-white/10

              backdrop-blur-3xl

              shadow-[0_8px_40px_rgba(255,255,255,0.08)]

              flex
              items-center
              justify-center
            "
          >

            <Image
              src="/assets/DS Lost and Found logo.png"
              alt="DSLF Logo"
              width={110}
              height={110}
              className="object-contain"
            />

          </div>

        </div>

        {/* TITLE */}
        <div className="text-center mt-8">

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black

              bg-gradient-to-b
              from-white
              to-white/60

              bg-clip-text
              text-transparent
            "
          >
            DSLF
          </h1>

          <p
            className="
              mt-4

              text-white/50

              text-lg
              md:text-xl
            "
          >
            Debsirin Lost & Found
          </p>

        </div>

        {/* SEARCH */}
        <div className="mt-12">

          <div
            className="
              flex
              items-center

              rounded-[28px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-3xl

              px-6
              py-5

              shadow-[0_8px_40px_rgba(255,255,255,0.06)]
            "
          >

            <Search
              size={22}
              className="text-white/40"
            />

            <input
              type="text"
              placeholder="Search lost or found items..."
              className="
                ml-4
                w-full

                bg-transparent

                outline-none

                placeholder:text-white/30
              "
            />

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-5 mt-12">

          {/* REPORT LOST */}
          <a
            href="/report-lost"
            className="
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-3xl

              p-6

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:bg-white/10

              shadow-[0_8px_40px_rgba(255,255,255,0.06)]
            "
          >

            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-white/10

                border
                border-white/10

                backdrop-blur-xl

                flex
                items-center
                justify-center
              "
            >

              <TriangleAlert
                size={30}
                className="
                  text-white

                  drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                "
              />

            </div>

            <h2
              className="
                mt-6
                text-xl
                font-semibold
              "
            >
              แจ้งของหาย
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Report lost item
            </p>

          </a>

          {/* REPORT FOUND */}
          <a
            href="/report-found"
            className="
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-3xl

              p-6

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:bg-white/10

              shadow-[0_8px_40px_rgba(255,255,255,0.06)]
            "
          >

            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-white/10

                border
                border-white/10

                backdrop-blur-xl

                flex
                items-center
                justify-center
              "
            >

              <PackageCheck
                size={30}
                className="
                  text-white

                  drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                "
              />

            </div>

            <h2
              className="
                mt-6
                text-xl
                font-semibold
              "
            >
              แจ้งของเก็บได้
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Report found item
            </p>

          </a>

          {/* LOST ITEMS */}
          <a
            href="/lost-items"
            className="
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-3xl

              p-6

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:bg-white/10

              shadow-[0_8px_40px_rgba(255,255,255,0.06)]
            "
          >

            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-white/10

                border
                border-white/10

                backdrop-blur-xl

                flex
                items-center
                justify-center
              "
            >

              <Search
                size={30}
                className="
                  text-white

                  drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                "
              />

            </div>

            <h2
              className="
                mt-6
                text-xl
                font-semibold
              "
            >
              ของหาย
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Lost items
            </p>

          </a>

          {/* FOUND ITEMS */}
          <a
            href="/found-items"
            className="
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-3xl

              p-6

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:bg-white/10

              shadow-[0_8px_40px_rgba(255,255,255,0.06)]
            "
          >

            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-white/10

                border
                border-white/10

                backdrop-blur-xl

                flex
                items-center
                justify-center
              "
            >

              <Boxes
                size={30}
                className="
                  text-white

                  drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                "
              />

            </div>

            <h2
              className="
                mt-6
                text-xl
                font-semibold
              "
            >
              ของเก็บได้
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Found items
            </p>

          </a>

        </div>

      </div>

    </main>

  );

}