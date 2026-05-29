
"use client";

import { useEffect, useState } from "react";
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

        querySnapshot.forEach((doc) => {

          data.push({
            id: doc.id,
            ...doc.data(),
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
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <a
          href="/"
          className="text-green-400 hover:text-green-300"
        >
          ← กลับหน้าหลัก
        </a>

        <div className="flex items-center justify-between mt-6">

          <div>

            <h1 className="text-5xl font-black text-green-400">
              ของที่เก็บได้
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              Found Items Feed
            </p>

          </div>

          <a
            href="/report-found"
            className="bg-green-500 text-white px-6 py-4 rounded-2xl font-black hover:scale-105 transition"
          >
            แจ้งของที่เก็บได้
          </a>

        </div>

        {loading ? (

          <div className="mt-20 text-center text-gray-500 text-xl">
            กำลังโหลด...
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {items.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-400 transition"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-3xl font-black text-green-400">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {item.location}
                    </p>

                  </div>

                  <div className="text-sm text-gray-500">
                    FOUND
                  </div>

                </div>

                <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-8 space-y-2">

                  <div className="text-gray-400">
                    👤 {item.name}
                  </div>

                  <div className="text-gray-400">
                    📞 {item.phone}
                  </div>

                  <div className="text-gray-500 text-sm">
                    📅 {item.date || "ไม่ระบุวันที่"}
                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}

