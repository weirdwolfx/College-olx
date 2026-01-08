import { Pencil, Trash2 } from "lucide-react";

const MyItemsCard = ({ item, onEdit, onDelete }) => {
  return (
    <div
      className="
        flex flex-col sm:flex-row gap-4
        bg-white drop-shadow-md rounded-2xl p-4
        shadow-sm hover:shadow-md transition
        w-full min-w-0
        sm:min-w-165 sm:w-fit
      "
    >
      <div className="w-full sm:w-50 h-50 shrink-0 overflow-hidden border-2 rounded-xl bg-gray-100">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0 gap-3">
        <div className="w-full">
          <div className="flex justify-between items-start gap-2 w-full">
            <h3 className="text-[22px] sm:text-[25px] font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
              {item.title}
            </h3>

            <p className="text-sm sm:text-md text-gray-800 whitespace-nowrap">
              {item.date}
            </p>
          </div>

          <p className="text-lg font-bold text-black mt-1">₹ {item.price}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button
            onClick={() => onEdit(item._id)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-md font-bold w-full"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => onDelete(item._id)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg text-md font-bold hover:bg-red-700 transition w-full"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItemsCard;
