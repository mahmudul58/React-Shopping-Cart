import { IoClose } from "react-icons/io5";

export function ConfirmClearCartWindow({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-1100 flex items-center justify-center bg-black/50 animate-fade-in-overlay">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md animate-scale-up-fade">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Cart</h3>
        <p className="text-gray-600 mb-6 font-medium leading-relaxed">Are you sure you want to remove all items from your cart? This action cannot be undone.</p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700 font-bold hover:bg-gray-50 transition-colors cursor-pointer">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-5 py-2.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
