"use client";

import { useState } from "react";
import Link from "next/link";

import toast from "react-hot-toast";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ReportLostPage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentId, setStudentId] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {

    try {

      let imageUrl = "";

      if (image) {

        const formData = new FormData();

        formData.append("file", image);
        formData.append("upload_preset", "debsirin");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dg54fdh6s/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        imageUrl = data.secure_url;
      }

      await addDoc(collection(db, "lost-items"), {
        title,
        description,
        location,
        date,
        name,
        phone,
        studentId,
        imageUrl,
        returned: false,
        createdAt: new Date(),
      });

      toast.success("ส่งข้อมูลสำเร็จ ✨");

      setTitle("");
      setDescription("");
      setLocation("");
      setDate("");
      setName("");
      setPhone("");
      setStudentId("");
      setImage(null);

    } catch (error) {

      console.error(error);

      toast.error("เกิดข้อผิดพลาด");

    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/assets/สนามฟุตบอลปูหญ้าเทียมโรงเรียนเทพศิรินทร์.jpg"
          className="w-full h-full object-cover opacity-20 scale-110"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-300/10 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      </div>

      {/* CONTENT */}
      <section className="relative z-20 px-5 py-10 md:py-16">

        <div className="max-w-4xl mx-auto">

          {/* BACK */}
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              bg-white/5
              backdrop-blur-2xl
              border border-white/10
              px-5 py-3
              rounded-2xl
              text-yellow-300
              hover:bg-white/10
              transition
            "
          >
            ← กลับหน้าหลัก
          </Link>

          {/* GLASS CARD */}
          <div className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-3xl
            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
            mt-8
            p-8 md:p-14
          ">

            {/* LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>

            <div className="relative z-10">

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl font-black text-yellow-300">
                แจ้งของหาย
              </h1>

              <p className="text-gray-300 text-sm md:text-lg mt-4">
                Lost Item Report
              </p>

              {/* FORM */}
              <div className="mt-12 space-y-6">

                <input
                  type="text"
                  placeholder="ชื่อสิ่งของ"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <textarea
                  placeholder="รายละเอียด"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="
                    w-full
                    h-44
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="สถานที่ทำหาย"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="ชื่อผู้แจ้ง"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="เบอร์ติดต่อ"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="รหัสนักเรียน 5 หลัก"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-3xl
                    px-6 py-5
                    text-lg
                    outline-none
                    focus:border-yellow-300/50
                    transition
                  "
                />

                {/* UPLOAD */}
                <div className="
                  bg-white/5
                  border border-dashed border-white/10
                  backdrop-blur-2xl
                  rounded-[32px]
                  p-10
                  text-center
                ">

                  <div className="text-5xl mb-4">
                    🔍
                  </div>

                  <p className="text-gray-300 text-lg">
                    อัปโหลดรูปสิ่งของ
                  </p>

                  <input
                    type="file"
                    className="mt-6"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setImage(e.target.files[0]);
                      }
                    }}
                  />

                </div>

                {/* BUTTON */}
                <button
                  onClick={handleSubmit}
                  className="
                    relative
                    overflow-hidden
                    w-full
                    bg-yellow-400/20
                    border border-yellow-300/20
                    backdrop-blur-2xl
                    text-white
                    py-5
                    rounded-3xl
                    font-black
                    text-xl
                    transition
                    hover:scale-[1.02]
                    hover:bg-yellow-300/30
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                  "
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                  <span className="relative z-10">
                    ส่งข้อมูล
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}