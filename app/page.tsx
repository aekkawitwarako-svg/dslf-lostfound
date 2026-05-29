export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/assets/สนามฟุตบอลปูหญ้าเทียมโรงเรียนเทพศิรินทร์.jpg"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#031b13]/95 via-[#072b1f] to-black"></div>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-6 border-b border-white/10">

        <div className="flex items-center gap-4">

          <img
            src="/assets/ตราเทพศิรินทร์.png"
            alt="Debsirin"
            className="w-16 h-16 object-contain"
          />

          <div>
            <h1 className="text-2xl font-black">
              โรงเรียนเทพศิรินทร์
            </h1>

            <p className="text-yellow-400">
              Debsirin School
            </p>
          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-24">

        <img
          src="/assets/DS Lost and Found logo.png"
          alt="DSLF"
          className="w-72 drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
        />

        <h1 className="text-7xl font-black mt-10 tracking-wide">
          DSLF
        </h1>

        <p className="text-yellow-400 text-4xl font-bold mt-4">
          Debsirin Lost & Found
        </p>

        <p className="text-gray-300 text-lg mt-8 max-w-2xl leading-relaxed">
          ระบบแจ้งของหายและของที่เก็บได้
          สำหรับนักเรียนโรงเรียนเทพศิรินทร์
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-2xl font-black text-lg transition hover:scale-105 shadow-lg shadow-yellow-500/20">
            แจ้งของหาย
          </button>

          <button className="bg-green-500 hover:bg-green-400 px-10 py-5 rounded-2xl font-black text-lg transition hover:scale-105 shadow-lg shadow-green-500/20">
            แจ้งของที่เก็บได้
          </button>

        </div>

        {/* INFO */}
        <div className="mt-20 text-gray-400 text-sm space-y-2">

          <p>
            โรงเรียนเทพศิรินทร์
          </p>

          <p>
            1466 ถ.กรุงเกษม แขวงวัดเทพศิรินทร์ เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100
          </p>

          <p>
            โทร 02 621 5801
          </p>

          <p>
            debsirin.ac.th
          </p>

        </div>

        {/* FOOTER */}
        <div className="mt-16 mb-10 text-gray-500 text-sm">
          Developed by กลุ่มบริหารกิจการนักเรียนและงานบุคคล
        </div>

      </section>

    </main>
  );
}