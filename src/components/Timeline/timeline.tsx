import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import type { Active, Over } from "@dnd-kit/core";

interface Items {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const Timeline = ({ initialItems, data }: { initialItems: Items[], data: Items[] }) => {
  const [timelineItems, setTimelineItems] = useState(initialItems);
  const [availableItems, setAvailableItems] = useState(data);
  const [newItem, setNewItem] = useState<Items>({
    id: Date.now(),
    title: "",
    description: "",
    date: "",
  });

  const handleAddItem = () => {
    if (!newItem.title || !newItem.description || !newItem.date) {
      alert("Semua field harus diisi!");
      return;
    }

    setAvailableItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
    setNewItem({ id: Date.now(), title: "", description: "", date: "" });
  };

  const handleDeleteItem = (id: number, from: "available" | "timeline") => {
    if (from === "available") {
      setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setTimelineItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const handleMoveItem = (id: number, from: "available" | "timeline") => {
    if (from === "available") {
      const itemToMove = availableItems.find((item) => item.id === id);
      if (itemToMove) {
        setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setTimelineItems((prevItems) => [...prevItems, itemToMove]);
      }
    } else {
      const itemToMove = timelineItems.find((item) => item.id === id);
      if (itemToMove) {
        setTimelineItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setAvailableItems((prevItems) => [...prevItems, itemToMove]);
      }
    }
  };

  const onDragEnd = ({ active, over }: { active: Active; over: Over | null }) => {
    if (!over || active.id === over.id) return;

    setTimelineItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = over ? items.findIndex((item) => item.id === over.id) : oldIndex;
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      {/* Table for Adding New Items */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Tambah Data</h2>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Judul"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Deskripsi"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newItem.date}
            onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
            className="p-2 border rounded"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Tambah
          </button>
        </div>
      </div>

      {/* Table for Available Items */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Daftar Data</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Judul</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
              <th className="border border-gray-300 px-4 py-2">Tanggal</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {availableItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2 text-center flex justify-center gap-2">
                  <button
                    onClick={() => handleMoveItem(item.id, "available")}
                    className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Pindah
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id, "available")}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for Timeline Items */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Daftar Data Terpilih</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Judul</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
              <th className="border border-gray-300 px-4 py-2">Tanggal</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {timelineItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2 text-center flex justify-center gap-2">
                  <button
                    onClick={() => handleMoveItem(item.id, "timeline")}
                    className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Pindah
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id, "timeline")}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Timeline with Drag-and-Drop */}
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={timelineItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="border-l-4 border-blue-500">
            {timelineItems.map((item) => (
              <SortableItem key={item.id} id={item.id} item={item} 
              //onMove={() => handleMoveItem(item.id, "timeline")} 
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

