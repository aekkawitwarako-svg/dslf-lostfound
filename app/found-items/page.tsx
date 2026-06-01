"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { db } from "@/lib/firebase";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export default function FoundItemsPage() {

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {

      try {

        const q = query(
          collection(db, "found-items"),
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

      } catch (error) {

        console.error(error);

      }

      setLoading(false);

    };

    fetchItems();

  }, []);

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
        <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-green-400/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-emerald-300/10 blur-[120px] rounded-full"></div>

        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

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
                  text-green-300
                  hover:bg-white/10
                  transition
                "
              >
                ← กลับหน้าหลัก
              </Link>

              <h1 className="text-4xl md:text-6xl font-black text-green-300 mt-8">
                ของที่เก็บได้
              </h1>

              <p className="text-gray-300 text-sm md:text-lg mt-4">
                Found Items Feed
              </p>

            </div>

            <Link
              href="/report-found"
              className="
                relative
                overflow-hidden
                bg-green-400/20
                border border-green-300/20
                backdrop-blur-2xl
                px-8 py-5
                rounded-3xl
                font-black
                text-lg
                transition
                hover:scale-[1.03]
                hover:bg-green-300/30
                shadow-[0_8px_32px_rgba(0,0,0,0.37)]
              "
            >

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              <span className="relative z-10">
                แจ้งของที่เก็บได้
              </span>

            </Link>

          </div>

          {/* LOADING */}
          {loading ? (

            <div className="
              mt-20
              text-center
              text-gray-400
              text-xl
            ">
              กำลังโหลด...
            </div>

          ) : (

            /* GRID */
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
                    transition
                    hover:scale-[1.02]
                  "
                >

                  {/* LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>

                  <div className="relative z-10 p-6">

                    {/* IMAGE */}
                    {item.imageUrl && (

                      <div className="overflow-hidden rounded-[28px]">

                        <img
                          src={item.imageUrl}
                          className="
                            w-full
                            h-64
                            object-cover
                            transition
                            hover:scale-105
                          "
                        />

                      </div>

                    )}

                    {/* HEADER */}
                    <div className="flex items-start justify-between mt-6 gap-4">

                      <div>

                        <h2 className="text-2xl md:text-3xl font-black text-green-300 leading-tight">
                          {item.title}
                        </h2>

                        <p className="text-gray-400 mt-3">
                          📍 {item.location}
                        </p>

                      </div>

                      <div className="
                        bg-green-400/20
                        border border-green-300/20
                        backdrop-blur-2xl
                        px-4 py-2
                        rounded-full
                        text-sm
                        font-bold
                        whitespace-nowrap
                      ">
                        FOUND
                      </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* INFO */}
                    <div className="
                      mt-6
                      space-y-3
                      bg-white/5
                      border border-white/10
                      backdrop-blur-2xl
                      rounded-[24px]
                      p-5
                    ">

                      <div className="text-gray-300">
                        👤 {item.name}
                      </div>

                      <div className="text-gray-300">
                        📞 {item.phone}
                      </div>

                      <div className="text-gray-400 text-sm">
                        📅 {item.date || "ไม่ระบุวันที่"}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}