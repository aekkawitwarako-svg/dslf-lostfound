"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export default function LostItemsPage() {

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {

    const fetchItems = async () => {

      const q = query(
        collection(db, "lost-items"),
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

    };

    fetchItems();

  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black text-yellow-400">
        รายการของหาย
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {items.map((item) => (

          <div
            key={item.id}
            className="bg-zinc-900 p-6 rounded-3xl"
          >

            {item.imageUrl && (
              <img
                src={item.imageUrl}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
            )}

            <h2 className="text-3xl font-black text-yellow-400">
              {item.title}
            </h2>

            <p className="mt-4 text-gray-300">
              {item.description}
            </p>

            <div className="mt-6 space-y-2 text-gray-400">

              <div>📍 {item.location}</div>

              <div>👤 {item.name}</div>

              <div>📞 {item.phone}</div>

              <div>📅 {item.date}</div>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}