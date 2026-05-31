export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0">
        <img
          src="/assets/สนามฟุตบอลปูหญ้าเทียมโรงเรียนเทพศิรินทร์.jpg"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#031b13]/95 via-[#072b1f] to-black"></div>
      </div>

      <section className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-24">

        <img
          src="/assets/DS Lost and Found logo.png"
          alt="DSLF"
          className="w-72"
        />

        <h1 className="text-7xl font-black mt-10">
          DSLF
        </h1>

        <p className="text-yellow-400 text-4xl font-bold mt-4">
          Debsirin Lost & Found
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <a
            href="/report-lost"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-2xl font-black text-lg"
          >
            แจ้งของหาย
          </a>

          <a
            href="/report-found"
            className="bg-green-500 hover:bg-green-400 px-10 py-5 rounded-2xl font-black text-lg"
          >
            แจ้งของที่เก็บได้
          </a>

        </div>

      </section>

    </main>
  );
}