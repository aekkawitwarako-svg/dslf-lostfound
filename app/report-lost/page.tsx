"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ReportLostPage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
        imageUrl,
        createdAt: new Date(),
      });

      alert("ส่งข้อมูลสำเร็จ 🎉");

      setTitle("");
      setDescription("");
      setLocation("");
      setDate("");
      setName("");
      setPhone("");
      setImage(null);

    } catch (error) {

      console.error(error);
      alert("เกิดข้อผิดพลาด");

    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400">
          แจ้งของหาย
        </h1>

        <div className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="ชื่อสิ่งของ"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <textarea
            placeholder="รายละเอียด"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 h-40"
          />

          <input
            type="text"
            placeholder="สถานที่ทำหาย"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            placeholder="ชื่อผู้แจ้ง"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="text"
            placeholder="เบอร์ติดต่อ"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold"
          >
            ส่งข้อมูล
          </button>

        </div>

      </div>

    </main>
  );
}