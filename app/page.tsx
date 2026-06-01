
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Home,
  Search,
  PackageCheck,
  Shield,
  TriangleAlert,
  ClipboardList,
  Boxes,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div
        className="
          fixed inset-0 -z-30
          bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.22),transparent_32%),linear-gradient(to_bottom,#081107,#0f1d10,#050505)]
        "
      />

      {/* GREEN / GOLD LIGHT */}
      <div className="absolute top-[-120px] left-[-120px] h-[340px] w-[340px] rounded-full bg-green-500/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* HEADER */}
      <section className="px-6 pt-10">

        <div className="flex items-center gap-4">

          {/* SCHOOL LOGO */}
          <div
            className="
              relative
              h-[90px]
              w-[90px]
              overflow-hidden
              rounded-[28px]
              border border-white/15
              bg-white/10
              backdrop-blur-2xl
              shadow-[0_0_40px_rgba(255,255,255,0.08)]
            "
          >

            <Image
              src="/assets/ตราเทพศิรินทร์.png"
              alt="Debsirin"
              fill
              className="object-contain p-3"
            />

          </div>

          {/* SCHOOL NAME */}
          <div>

            <h1 className="text-3xl font-bold tracking-wide">
              โรงเรียนเทพศิรินทร์
            </h1>

            <p className="text-lg text-yellow-300/90">
              Debsirin School
            </p>

          </div>

        </div>

      </section>

      {/* HERO */}
      <section className="mt-14 px-6 text-center">

        {/* APP LOGO */}
        <div
          className="
            relative
            mx-auto
            h-[130px]
            w-[130px]
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-white/10
            backdrop-blur-3xl
            shadow-[0_0_80px_rgba(255,255,255,0.08)]
          "
        >

          <Image
            src="/assets/DS Lost and Found logo.png"
            alt="DSLF"
            fill
            className="object-contain p-5"
          />

        </div>

        {/* DSLF */}
        <h1
          className="
            mt-7
            bg-gradient-to-b
            from-white/90
            to-white/20
            bg-clip-text
            text-[82px]
            font-black
            tracking-[0.35em]
            text-transparent
            drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
          "
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.18)",
          }}
        >
          DSLF
        </h1>

        <p className="-mt-3 text-lg tracking-wide text-white/50">
          Debsirin Lost & Found
        </p>

      </section>

      {/* SEARCH */}
      <section className="mt-10 px-6">

        <div
          className="
            flex items-center gap-3
            rounded-full
            border border-white/10
            bg-white/[0.04]
            px-5 py-4
            backdrop-blur-2xl
            shadow-[0_0_30px_rgba(255,255,255,0.04)]
          "
        >

          <Search
            className="text-white/40"
            size={22}
          />

          <input
            type="text"
            placeholder="Search lost or found items..."
            className="
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-white/30
            "
          />

        </div>

      </section>

      {/* MENU */}
      <section className="mt-10 grid grid-cols-2 gap-5 px-6 pb-36">

        {/* LOST */}
        <Link href="/report-lost">

          <div
            className="
              min-h-[220px]
              rounded-[34px]
              border border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-3xl
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >

            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/10
                shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >

              <TriangleAlert size={32} />

            </div>

            <h2 className="mt-7 text-3xl font-bold">
              แจ้งของหาย
            </h2>

            <p className="mt-2 text-lg text-white/50">
              Report lost item
            </p>

          </div>

        </Link>

        {/* FOUND */}
        <Link href="/report-found">

          <div
            className="
              min-h-[220px]
              rounded-[34px]
              border border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-3xl
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >

            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/10
                shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >

              <PackageCheck size={32} />

            </div>

            <h2 className="mt-7 text-3xl font-bold">
              แจ้งของที่เก็บได้
            </h2>

            <p className="mt-2 text-lg text-white/50">
              Report found item
            </p>

          </div>

        </Link>

        {/* LOST LIST */}
        <Link href="/lost-items">

          <div
            className="
              min-h-[220px]
              rounded-[34px]
              border border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-3xl
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >

            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/10
                shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >

              <ClipboardList size={32} />

            </div>

            <h2 className="mt-7 text-3xl font-bold">
              ดูรายการของหาย
            </h2>

            <p className="mt-2 text-lg text-white/50">
              Lost items feed
            </p>

          </div>

        </Link>

        {/* FOUND LIST */}
        <Link href="/found-items">

          <div
            className="
              min-h-[220px]
              rounded-[34px]
              border border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-3xl
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >

            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/10
                shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >

              <Boxes size={32} />

            </div>

            <h2 className="mt-7 text-3xl font-bold">
              ดูรายการของที่เก็บได้
            </h2>

            <p className="mt-2 text-lg text-white/50">
              Found items feed
            </p>

          </div>

        </Link>

      </section>

      {/* FLOATING NAV */}
      <div
        className="
          fixed bottom-6 left-1/2 z-50
          flex -translate-x-1/2 items-center gap-7
          rounded-full
          border border-white/10
          bg-white/[0.06]
          px-8 py-5
          backdrop-blur-3xl
          shadow-[0_0_50px_rgba(255,255,255,0.08)]
        "
      >

        <Link
          href="/"
          className="flex flex-col items-center text-white"
        >

          <Home size={24} />

          <span className="mt-1 text-xs">
            Home
          </span>

        </Link>

        <Link
          href="/lost-items"
          className="flex flex-col items-center text-white/60"
        >

          <Search size={24} />

          <span className="mt-1 text-xs">
            Lost
          </span>

        </Link>

        <Link
          href="/found-items"
          className="flex flex-col items-center text-white/60"
        >

          <PackageCheck size={24} />

          <span className="mt-1 text-xs">
            Found
          </span>

        </Link>

        <Link
          href="/admin"
          className="flex flex-col items-center text-white/60"
        >

          <Shield size={24} />

          <span className="mt-1 text-xs">
            Admin
          </span>

        </Link>

      </div>

    </main>
  );
}
