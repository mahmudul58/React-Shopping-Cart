import { IoCheckmark, IoClose } from "react-icons/io5";

export function ItemAddedModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-5 left-0 right-0 z-1100 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-4 bg-[#00c814] text-white px-5 py-4 rounded-xl shadow-lg w-[90%] max-w-md animate-slide-down-fade">
        {/* Left side: Check Icon & Message */}
        <div className="flex items-center gap-3">
          {/* White circle with green check mark */}
          <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full shrink-0">
            <IoCheckmark className="text-[#00c814] text-xl stroke-2" />
          </div>

          <p className="text-base font-semibold leading-snug">Item has been successfully added to your cart!</p>
        </div>

        {/* Right side: Close Button */}
        <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity p-1 cursor-pointer shrink-0">
          <IoClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export function CartEmptyModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-5 left-0 right-0 z-1100 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-4 bg-[#c82800] text-white px-5 py-4 rounded-xl shadow-lg w-[90%] max-w-md animate-slide-down-fade">
        {/* Left side: Check Icon & Message */}
        <div className="flex items-center gap-3">
          {/* White circle with green check mark */}
          <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full shrink-0">
            <IoCheckmark className="text-[#fa0a0a] text-xl stroke-2" />
          </div>

          <p className="text-base font-semibold leading-snug">Item has been deleted from your cart!</p>
        </div>

        {/* Right side: Close Button */}
        <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity p-1 cursor-pointer shrink-0">
          <IoClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export function InvalidPromoModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-5 left-0 right-0 z-1100 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-4 bg-[#c82800] text-white px-5 py-4 rounded-xl shadow-lg w-[90%] max-w-md animate-slide-down-fade">
        {/* Left side: Check Icon & Message */}
        <div className="flex items-center gap-3">
          {/* White circle with red close mark */}
          <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full shrink-0">
            <IoClose className="text-[#fa0a0a] text-xl stroke-2" />
          </div>

          <p className="text-base font-semibold leading-snug">Invalid Promo Code!</p>
        </div>

        {/* Right side: Close Button */}
        <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity p-1 cursor-pointer shrink-0">
          <IoClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export function ConfirmClearCartModal({ isOpen, onClose, onConfirm }) {
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
