"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function LostItemsPage() {

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {

    fetchItems();

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

  const markAsReturned = async (item: any) => {

    const studentId = prompt("กรอกรหัสนักเรียน 5 หลัก");

    if (!studentId) return;

    if (studentId !== item.studentId) {
      alert("รหัสนักเรียนไม่ถูกต้อง");
      return;
    }

    try {

      const docRef = doc(db, "lost-items", item.id);

      await updateDoc(docRef, {
        returned: true,
      });

      alert("เปลี่ยนสถานะสำเร็จ 🎉");

      fetchItems();

    } catch (error) {

      console.error(error);
      alert("เกิดข้อผิดพลาด");

    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black text-yellow-400">
        รายการของหาย
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {items.map((item) => (

          <div
            key={item.id}
            className={`p-6 rounded-3xl border transition ${
              item.returned
                ? "bg-zinc-800 border-green-500 opacity-70"
                : "bg-zinc-900 border-zinc-800"
            }`}
          >

            {item.imageUrl && (
              <img
                src={item.imageUrl}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
            )}

            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-black text-yellow-400">
                {item.title}
              </h2>

              {item.returned && (
                <div className="bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                  คืนแล้ว
                </div>
              )}

            </div>

            <p className="mt-4 text-gray-300">
              {item.description}
            </p>

            <div className="mt-6 space-y-2 text-gray-400">

              <div>📍 {item.location}</div>

              <div>👤 {item.name}</div>

              <div>📞 {item.phone}</div>

              <div>📅 {item.date}</div>

            </div>

            {!item.returned && (
              <button
                onClick={() => markAsReturned(item)}
                className="mt-8 w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-black transition"
              >
                รับคืนแล้ว
              </button>
            )}

          </div>

        ))}

      </div>

    </main>
  );
}