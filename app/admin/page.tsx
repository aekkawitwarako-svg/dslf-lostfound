"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import toast from "react-hot-toast";

import { db } from "@/lib/firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

export default function AdminPage() {

  const [items, setItems] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {

    const password = prompt("กรอกรหัส Admin");

    if (password === "DSLF112345") {

      setAuthorized(true);

      fetchItems();

    } else {

      toast.error("รหัสไม่ถูกต้อง");

    }

  }, []);

  const fetchItems = async () => {

    const q = query(
      collection(db, "lost-items"),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    const data: any[] = [];

    querySnapshot.forEach((docSnap) => {

      data.push({
        id: docSnap.id,
        ...docSnap.data(),
      });

    });

    setItems(data);

  };

  const deleteItem = async (id: string) => {

    const confirmDelete = confirm("ลบโพสต์นี้?");

    if (!confirmDelete) return;

    try {

      await deleteDoc(doc(db, "lost-items", id));

      toast.success("ลบโพสต์สำเร็จ");

      fetchItems();

    } catch (error) {

      console.error(error);

      toast.error("เกิดข้อผิดพลาด");

    }

  };

  if (!authorized) {

    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-2xl font-bold">
          กำลังตรวจสอบ...
        </div>
      </main>
    );

  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/assets/สนามฟุตบอลปูหญ้าเทียมโรงเรียนเทพศิรินทร์.jpg"
          className="w-full h-full object-cover opacity-20 scale-110"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-red-400/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      </div>

      {/* CONTENT */}
      <section className="relative z-20 px-5 py-10 md:py-16">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

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
                  text-red-300
                  hover:bg-white/10
                  transition
                "
              >
                ← กลับหน้าหลัก
              </Link>

              <h1 className="text-4xl md:text-6xl font-black text-red-300 mt-8">
                DSLF ADMIN
              </h1>

              <p className="text-gray-300 text-sm md:text-lg mt-4">
                Admin Dashboard
              </p>

            </div>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

            {items.map((item) => (

              <div
                key={item.id}
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-3xl
                  shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>

                <div className="relative z-10 p-6">

                  {item.imageUrl && (

                    <div className="overflow-hidden rounded-[28px]">

                      <img
                        src={item.imageUrl}
                        className="w-full h-64 object-cover"
                      />

                    </div>

                  )}

                  <h2 className="text-3xl font-black text-yellow-300 mt-6">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-300">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2 text-gray-400">

                    <div>📍 {item.location}</div>

                    <div>👤 {item.name}</div>

                    <div>📞 {item.phone}</div>

                  </div>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="
                      mt-8
                      w-full
                      bg-red-400/20
                      border border-red-300/20
                      backdrop-blur-2xl
                      py-4
                      rounded-[24px]
                      font-black
                      text-lg
                      transition
                      hover:bg-red-300/30
                    "
                  >
                    🗑 ลบโพสต์
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}