"use client";

import Image from "next/image";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex justify-center">

          <div className="
            w-36
            h-36

            rounded-[40px]

            bg-white/10

            border
            border-white/10

            backdrop-blur-3xl

            flex
            items-center
            justify-center
          ">

            <Image
              src="/assets/DS Lost and Found logo.png"
              alt="Logo"
              width={100}
              height={100}
            />

          </div>

        </div>

        <div className="text-center mt-8">

          <h1 className="text-6xl font-black">
            DSLF
          </h1>

          <p className="text-white/50 mt-3">
            Debsirin Lost & Found
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 mt-12">

          <a
            href="/report-lost"
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-3xl
              p-6
            "
          >

            <div className="
              w-16
              h-16

              rounded-3xl

              bg-white/10

              flex
              items-center
              justify-center

              text-3xl
            ">
              🔍
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              แจ้งของหาย
            </h2>

          </a>

          <a
            href="/report-found"
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-3xl
              p-6
            "
          >

            <div className="
              w-16
              h-16

              rounded-3xl

              bg-white/10

              flex
              items-center
              justify-center

              text-3xl
            ">
              📦
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              แจ้งของเก็บได้
            </h2>

          </a>

          <a
            href="/lost-items"
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-3xl
              p-6
            "
          >

            <div className="
              w-16
              h-16

              rounded-3xl

              bg-white/10

              flex
              items-center
              justify-center

              text-3xl
            ">
              📋
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              ของหาย
            </h2>

          </a>

          <a
            href="/found-items"
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-3xl
              p-6
            "
          >

            <div className="
              w-16
              h-16

              rounded-3xl

              bg-white/10

              flex
              items-center
              justify-center

              text-3xl
            ">
              🧊
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              ของเก็บได้
            </h2>

          </a>

        </div>

      </div>

    </main>

  );

}