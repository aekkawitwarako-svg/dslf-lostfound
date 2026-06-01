"use client";

import { useState } from "react";

export default function AdminPage() {

  const [password, setPassword] = useState("");

  return (

    <main className="
      min-h-screen

      bg-black
      text-white

      flex
      items-center
      justify-center

      px-6
    ">

      {/* BACKGROUND */}
      <div
        className="
          fixed
          inset-0
          -z-10

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,#030303,#090909)]
        "
      />

      <div
        className="
          w-full
          max-w-md

          rounded-[40px]

          border
          border-white/10

          bg-white/5

          backdrop-blur-3xl

          p-8

          shadow-[0_8px_60px_rgba(255,255,255,0.08)]
        "
      >

        {/* TITLE */}
        <div className="text-center">

          <div
            className="
              inline-flex

              px-4
              py-2

              rounded-full

              bg-white/10

              border
              border-white/10

              text-sm
              text-white/70
            "
          >
            Admin Access
          </div>

          <h1
            className="
              mt-6

              text-4xl
              font-black

              bg-gradient-to-b
              from-white
              to-white/60

              bg-clip-text
              text-transparent
            "
          >
            DSLF Admin
          </h1>

          <p className="mt-3 text-white/40">
            Secure management portal
          </p>

        </div>

        {/* INPUT */}
        <div className="mt-10">

          <label className="text-sm text-white/50">
            Admin Password
          </label>

          <div
            className="
              mt-3

              rounded-[24px]

              border
              border-white/10

              bg-white/5

              backdrop-blur-2xl

              px-5
              py-4

              shadow-[0_0_30px_rgba(255,255,255,0.05)]

              transition-all
              duration-300

              focus-within:border-white/20
              focus-within:bg-white/10
              focus-within:shadow-[0_0_40px_rgba(255,255,255,0.08)]
            "
          >

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full

                bg-transparent

                outline-none

                text-white

                placeholder:text-white/25
              "
            />

          </div>

        </div>

        {/* BUTTON */}
        <button
          className="
            mt-8
            w-full

            rounded-[24px]

            bg-white

            py-4

            text-black
            font-semibold

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
          "
        >
          Continue
        </button>

      </div>

    </main>

  );

}