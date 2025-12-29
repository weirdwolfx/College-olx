export default function LogoutConfirm({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
        <h3 className="text-xl font-semibold mb-2">
          Confirm Logout
        </h3>

        <p className="text-gray-600 mb-6">
          Are you sure you want to log out of CampX?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg border cursor-pointer hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-red-600 text-white cursor-pointer hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
