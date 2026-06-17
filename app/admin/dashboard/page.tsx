
"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [items, setItems] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("foundItems") || "[]"
    );

    setItems(data);
  }, []);

  const saveItems = (updatedItems: any[]) => {
    setItems(updatedItems);

    localStorage.setItem(
      "foundItems",
      JSON.stringify(updatedItems)
    );
  };

  const deleteItem = (id: number) => {
    if (!confirm("ลบรายการนี้หรือไม่?")) return;

    const updated = items.filter(
      (item) => item.id !== id
    );

    saveItems(updated);
  };

  const markReturned = (id: number) => {
    const updated = items.map((item) =>
      item.id === id
        ? { ...item, returned: true }
        : item
    );

    saveItems(updated);
  };

  const updateField = (
    id: number,
    field: string,
    value: string
  ) => {
    const updated = items.map((item) =>
      item.id === id
        ? { ...item, [field]: value }
        : item
    );

    setItems(updated);
  };

  const saveEdit = () => {
    localStorage.setItem(
      "foundItems",
      JSON.stringify(items)
    );

    setEditingId(null);

    alert("บันทึกสำเร็จ");
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-black text-green-400 mb-10">
        DSLF Admin Dashboard
      </h1>

      {items.length === 0 ? (
        <div className="text-gray-400">
          ยังไม่มีข้อมูล
        </div>
      ) : (
        <div className="grid gap-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
              "
            >

              {editingId === item.id ? (

                <>
                  <input
                    value={item.title}
                    onChange={(e) =>
                      updateField(
                        item.id,
                        "title",
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      bg-black
                      border
                      border-white/20
                      rounded-xl
                      p-3
                      mb-3
                    "
                  />

                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      updateField(
                        item.id,
                        "description",
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      bg-black
                      border
                      border-white/20
                      rounded-xl
                      p-3
                      mb-3
                    "
                  />

                  <input
                    value={item.location}
                    onChange={(e) =>
                      updateField(
                        item.id,
                        "location",
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      bg-black
                      border
                      border-white/20
                      rounded-xl
                      p-3
                      mb-3
                    "
                  />

                  <button
                    onClick={saveEdit}
                    className="
                      bg-green-500
                      px-5
                      py-2
                      rounded-xl
                    "
                  >
                    💾 บันทึก
                  </button>
                </>

              ) : (

                <>
                  <h2 className="text-2xl font-bold text-green-300">
                    {item.title}
                  </h2>

                  <p className="mt-3">
                    {item.description}
                  </p>

                  <p className="mt-2">
                    📍 {item.location}
                  </p>

                  <p className="mt-2">
                    👤 {item.name}
                  </p>

                  <p className="mt-2">
                    📞 {item.phone}
                  </p>

                  <p className="mt-2">
                    📅 {item.date}
                  </p>

                  {item.returned && (
                    <div className="mt-3 text-green-400 font-bold">
                      ✅ รับคืนแล้ว
                    </div>
                  )}

                  <div className="flex gap-3 mt-6 flex-wrap">

                    <button
                      onClick={() =>
                        setEditingId(item.id)
                      }
                      className="
                        bg-yellow-500
                        text-black
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      ✏️ แก้ไข
                    </button>

                    <button
                      onClick={() =>
                        deleteItem(item.id)
                      }
                      className="
                        bg-red-500
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      🗑 ลบ
                    </button>

                    {!item.returned && (
                      <button
                        onClick={() =>
                          markReturned(item.id)
                        }
                        className="
                          bg-green-600
                          px-4
                          py-2
                          rounded-xl
                        "
                      >
                        ✅ รับคืนแล้ว
                      </button>
                    )}

                  </div>
                </>

              )}

            </div>

          ))}

        </div>
      )}

    </main>
  );
}

