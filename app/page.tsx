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

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%),linear-gradient(to_bottom,#030303,#090909)]
        "
      />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* SCHOOL BRAND */}
        <div className="flex items-center gap-5">

          <div
            className="
              w-24
              h-24

              rounded-[28px]

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
                text-3xl
                md:text-4xl

                font-black

                bg-gradient-to-b
                from-white
                to-white/70

                bg-clip-text
                text-transparent
              "
            >
              โรงเรียนเทพศิรินทร์
            </h1>

            <p className="text-yellow-300 text-lg mt-1">
              Debsirin School
            </p>

          </div>

        </div>

        {/* HERO */}
        <div className="text-center mt-16">

          <div className="flex justify-center">

            <div
              className="
                relative

                w-40
                h-40

                rounded-[42px]

                bg-white/5

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

          <h1
            className="
              mt-10

              text-6xl
              md:text-8xl

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
              mt-5

              text-white/50

              text-lg
              md:text-xl
            "
          >
            Debsirin School Lost & Found
          </p>

        </div>

        {/* SEARCH */}
        <div className="mt-14">

          <div
            className="
              flex
              items-center

              rounded-[30px]

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

                text-white

                placeholder:text-white/30
              "
            />

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-5 mt-14">

          {/* REPORT LOST */}
          <a
            href="/report-lost"
            className="
              group
              relative
              overflow-hidden

              rounded-[34px]

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

              rounded-[34px]

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

              rounded-[34px]

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
              ดูรายการของหาย
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Lost items feed
            </p>

          </a>

          {/* FOUND ITEMS */}
          <a
            href="/found-items"
            className="
              group
              relative
              overflow-hidden

              rounded-[34px]

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
              ดูรายการของเก็บได้
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/50
              "
            >
              Found items feed
            </p>

          </a>

        </div>

        {/* FOOTER SPACE */}
        <div className="h-40" />

      </div>

    </main>

  );

}