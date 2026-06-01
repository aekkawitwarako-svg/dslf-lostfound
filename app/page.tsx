import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/assets/สนามฟุตบอลปูหญ้าเทียมโรงเรียนเทพศิรินทร์.jpg"
          className="w-full h-full object-cover opacity-20 scale-110"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* GLOW BLOBS */}
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-green-400/20 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      </div>

      {/* NAVBAR */}
      <nav className="relative z-20 px-5 md:px-10 py-6">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="
             bg-white/40
             backdrop-blur-2xl
             border border-white/20
             rounded-3xl
             p-3
             shadow-[0_8px_32px_rgba(255,255,255,0.15)]
            ">

              <img
                src="/assets/ตราเทพศิรินทร์.png"
                alt="Debsirin"
                className="w-15 h-15 md:w-20 md:h-20 object-contain"
              />

            </div>

            <div>

              <h1 className="text-lg md:text-2xl font-black tracking-wide">
                โรงเรียนเทพศิรินทร์
              </h1>

              <p className="text-yellow-300 text-sm md:text-base">
                Debsirin School
              </p>

            </div>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-20 px-5 pt-10 md:pt-20 pb-20">

        <div className="max-w-6xl mx-auto">

          {/* GLASS CONTAINER */}
          <div className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-3xl
            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
            p-8 md:p-16
          ">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* LOGO */}
              <div className="
                bg-white/10
                backdrop-blur-2xl
                border border-white/10
                rounded-[40px]
                p-6
                shadow-[0_8px_32px_rgba(0,0,0,0.37)]
              ">

                <img
                  src="/assets/DS Lost and Found logo.png"
                  alt="DSLF"
                  className="w-40 md:w-64 drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
                />

              </div>

              {/* TITLE */}
              <h1 className="text-5xl md:text-8xl font-black mt-10 tracking-[0.2em]">
                DSLF
              </h1>

              <p className="text-yellow-300 text-xl md:text-4xl font-bold mt-4">
                Debsirin Lost & Found
              </p>

              <p className="text-gray-300 text-sm md:text-lg mt-8 max-w-3xl leading-relaxed">
                ระบบแจ้งของหายและของที่เก็บได้
                สำหรับนักเรียนโรงเรียนเทพศิรินทร์
              </p>

              {/* BUTTON GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 w-full max-w-3xl">

                <Link
                  href="/report-lost"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-yellow-300/20
                    bg-yellow-400/10
                    backdrop-blur-2xl
                    px-8 py-6
                    transition
                    hover:scale-[1.03]
                    hover:bg-yellow-300/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <div className="relative z-10">

                    <div className="text-2xl mb-2">
                      🔍
                    </div>

                    <h2 className="text-xl md:text-2xl font-black">
                      แจ้งของหาย
                    </h2>

                    <p className="text-sm text-gray-300 mt-2">
                      Lost Item Report
                    </p>

                  </div>

                </Link>

                <Link
                  href="/report-found"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-green-300/20
                    bg-green-400/10
                    backdrop-blur-2xl
                    px-8 py-6
                    transition
                    hover:scale-[1.03]
                    hover:bg-green-300/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <div className="relative z-10">

                    <div className="text-2xl mb-2">
                      📦
                    </div>

                    <h2 className="text-xl md:text-2xl font-black">
                      แจ้งของที่เก็บได้
                    </h2>

                    <p className="text-sm text-gray-300 mt-2">
                      Found Item Report
                    </p>

                  </div>

                </Link>

                <Link
                  href="/lost-items"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    px-8 py-6
                    transition
                    hover:scale-[1.03]
                    hover:bg-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <div className="relative z-10">

                    <div className="text-2xl mb-2">
                      📋
                    </div>

                    <h2 className="text-xl md:text-2xl font-black">
                      ดูรายการของหาย
                    </h2>

                    <p className="text-sm text-gray-300 mt-2">
                      Lost Items Feed
                    </p>

                  </div>

                </Link>

                <Link
                  href="/found-items"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    px-8 py-6
                    transition
                    hover:scale-[1.03]
                    hover:bg-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <div className="relative z-10">

                    <div className="text-2xl mb-2">
                      🧳
                    </div>

                    <h2 className="text-xl md:text-2xl font-black">
                      ดูรายการของที่เก็บได้
                    </h2>

                    <p className="text-sm text-gray-300 mt-2">
                      Found Items Feed
                    </p>

                  </div>

                </Link>

              </div>

              {/* FOOTER */}
              <div className="mt-16 text-gray-400 text-xs md:text-sm leading-relaxed">

                <p>
                  โรงเรียนเทพศิรินทร์
                </p>

                <p className="mt-2">
                  Developed by กลุ่มบริหารกิจการนักเรียนและงานบุคคล
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}