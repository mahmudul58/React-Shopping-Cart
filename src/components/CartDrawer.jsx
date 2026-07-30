import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

function CartDrawer({ isOpen, onClose, cartProducts, handleUpdateQuantity, handleRemoveFromCart }) {
  const subTotal = cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-1050 transition-opacity" />}

      <div
        className={`fixed top-0 right-0 h-full w-87.5 bg-white shadow-2xl z-1100 transform transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Section */}
        <div className="relative pt-6 pb-6 px-6 border-b border-gray-200">
          <button onClick={onClose} className="absolute top-4 left-4 text-3xl text-gray-800 hover:text-black cursor-pointer">
            <IoCloseOutline />
          </button>

          <div className="flex flex-col items-center mt-2">
            <h2 className="text-2xl font-extrabold text-[#1a202c]">Sub Total</h2>
            <span className="text-xl font-bold text-[#c53030] mt-2">৳ {subTotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <Link to="/my-cart" onClick={onClose} className="mt-4 w-48 border border-gray-800 rounded-full py-2 hover:bg-gray-100 flex items-center justify-center gap-2 font-medium">
              Go to Cart <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <div className="w-32 h-32 mb-6 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-500 font-semibold text-lg">Your Cart is Empty</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {cartProducts.map((item) => (
                <div key={item.id} className="border-b border-gray-200 bg-white">
                  {/* Product Image */}
                  <div className="bg-[#f4f4f4] p-4 flex justify-center h-56 w-full">
                    <img src={item.image} alt="abc" className="h-full object-contain mix-blend-multiply" />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col items-center pb-6">
                    <p className="text-xl font-extrabold text-gray-900 mb-6">৳ {(item.price * item.quantity).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                    {/* Controls */}
                    <div className="flex justify-between items-center w-full px-4">
                      {/* Quantity Selector */}

                      <div className="flex items-center border border-gray-300 overflow-hidden text-lg">
                        <button onClick={() => handleUpdateQuantity(item.id, -1)} className=" px-3 py-1 bg-white hover:bg-gray-50 text-gray-800 cursor-pointer">
                          &minus;
                        </button>
                        <span className="px-5 py-1 text-gray-800 font-medium border-x border-gray-300">{item.quantity}</span>
                        <button onClick={() => handleUpdateQuantity(item.id, 1)} className="px-3 py-1 bg-white hover:bg-gray-50 text-gray-800 cursor-pointer">
                          &#43;
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button onClick={() => handleRemoveFromCart(item.id)} className="text-gray-800 hover:text-red-600 p-2 cursor-pointer">
                        <IoTrashOutline size={26} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
