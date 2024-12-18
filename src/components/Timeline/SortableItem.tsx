import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Items {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const SortableItem = ({
  id,
  item,
  //onMove,
}: {
  id: number;
  item: Items;
  //onMove: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="ml-4 mb-6 bg-white p-4 rounded shadow hover:shadow-lg"
    >
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <h3 className="ml-4 font-bold text-lg">{item.title}</h3>
      </div>
      <p className="ml-8 text-gray-600">{item.description}</p>
      <span className="ml-8 text-sm text-gray-400">{item.date}</span>
      {/* <button
        onClick={onMove}
        className="flex px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 ml-auto"
      >
        Pindah
      </button> */}
    </div>
  );
};
