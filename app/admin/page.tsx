"use client";

import { useState } from "react";

export default function AdminPage() {

  const [password, setPassword] = useState("");

  return (

    <main
      className="
        min-h-screen

        bg-black
        text-white

        flex
        items-center
        justify-center

        px-6

        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          fixed
          inset-0
          -z-10

          bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.15),transparent_30%),linear-gradient(to_bottom,#020202,#050505)]
        "
      />

      {/* CARD */}
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

          shadow-[0_0_80px_rgba(34,197,94,0.10)]
        "
      >

        {/* TOP BADGE */}
        <div className="flex justify-center">

          <div
            className="
              px-4
              py-2

              rounded-full

              border
              border-yellow-400/20

              bg-yellow-400/10

              backdrop-blur-xl

              text-yellow-300

              text-sm
              font-medium

              shadow-[0_0_30px_rgba(250,204,21,0.12)]
            "
          >
            DSLF Secure Admin
          </div>

        </div>

        {/* TITLE */}
        <div className="text-center mt-8">

          <h1
            className="
              text-5xl

              font-black

              bg-gradient-to-b
              from-white
              to-white/60

              bg-clip-text
              text-transparent
            "
          >
            Admin Panel
          </h1>

          <p
            className="
              mt-4

              text-white/40

              text-lg
            "
          >
            Debsirin School Lost & Found
          </p>

        </div>

        {/* PASSWORD */}
        <div className="mt-12">

          <label
            className="
              text-sm
              text-white/50
            "
          >
            Admin Password
          </label>

          <div
            className="
              mt-3

              rounded-[28px]

              border
              border-emerald-400/10

              bg-emerald-400/5

              backdrop-blur-2xl

              px-5
              py-4

              shadow-[0_0_40px_rgba(34,197,94,0.08)]

              transition-all
              duration-300

              focus-within:border-emerald-400/20
              focus-within:bg-emerald-400/10
              focus-within:shadow-[0_0_60px_rgba(34,197,94,0.15)]
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

            rounded-[28px]

            bg-gradient-to-r
            from-yellow-300
            to-yellow-400

            py-4

            text-black
            font-bold

            transition-all
            duration-300

            hover:scale-[1.02]

            hover:shadow-[0_0_50px_rgba(250,204,21,0.35)]
          "
        >
          Continue
        </button>

      </div>

    </main>

  );

}