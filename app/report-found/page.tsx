export default function ReportFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-3xl mx-auto">

        <a
          href="/"
          className="text-green-400 hover:text-green-300"
        >
          ← กลับหน้าหลัก
        </a>

        <h1 className="text-5xl font-black text-green-400 mt-8">
          แจ้งของที่เก็บได้
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Found Item Report
        </p>

        <div className="mt-12 space-y-6">

          <input
            type="text"
            placeholder="ชื่อสิ่งของ"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-lg"
          />

          <textarea
            placeholder="รายละเอียดของสิ่งของ"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 h-44 text-lg"
          />

          <input
            type="text"
            placeholder="สถานที่พบ"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-lg"
          />

          <input
            type="date"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-lg"
          />

          <input
            type="text"
            placeholder="ชื่อผู้พบ"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-lg"
          />

          <input
            type="text"
            placeholder="เบอร์ติดต่อ"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 text-lg"
          />

          <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-2xl p-10 text-center">

            <p className="text-gray-400">
              อัปโหลดรูปสิ่งของ
            </p>

            <input
              type="file"
              className="mt-4"
            />

          </div>

          <button className="w-full bg-green-500 hover:bg-green-400 text-white py-5 rounded-2xl font-black text-xl transition hover:scale-[1.01]">
            ส่งข้อมูล
          </button>

        </div>

      </div>

    </main>
  );
}