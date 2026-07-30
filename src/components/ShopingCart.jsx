import { useState } from "react";
import { Link } from "react-router-dom";
import { InvalidPromoModal, ConfirmClearCartModal } from "./ModalDialogs";

export default function ShoppingCart({ cart, handleQuantityChange, handleRemoveItem, handleClearCart }) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  return (
    <div className="min-h-screen bg-[#f2f4f7] p-4 md:p-10 font-sans relative">
      <InvalidPromoModal isOpen={showPromoModal} onClose={() => setShowPromoModal(false)} />
      <ConfirmClearCartModal
        isOpen={showClearCartModal}
        onClose={() => setShowClearCartModal(false)}
        onConfirm={() => {
          handleClearCart();
          setShowClearCartModal(false);
        }}
      />

      <div className="mx-auto max-w-375 flex flex-col lg:flex-row gap-8">
        {/* ================= LEFT SECTION: SHOPPING CART ================= */}
        <div className="flex-1 bg-white p-6 rounded-sm shadow-sm border border-gray-100">
          {/* Header & Clear Cart Button */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-slate-800">Shopping Cart</h1>
            <button
              onClick={() => setShowClearCartModal(true)}
              disabled={cart.length === 0}
              className={`px-4 py-2 text-sm font-semibold text-white rounded transition-colors ${cart.length > 0 ? "bg-[#ff4d4f] hover:bg-red-600 cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`}
            >
              Clear Cart
            </button>
          </div>

          {/* Cart Content: Empty State vs Table */}
          {cart.length === 0 ? (
            /* Empty Cart View */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-48 h-48 mb-4 flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart" className="w-full h-full object-contain" />
              </div>
              <p className="text-xl font-bold text-gray-800 mb-6">Your Cart is Empty</p>
              <Link to="/" className="px-6 py-2 border-2 border-gray-800 text-gray-900 font-bold rounded hover:bg-gray-100 transition-colors inline-block">
                Go to Shop
              </Link>
            </div>
          ) : (
            /* Cart Table View */
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-2 w-28">IMAGE</th>
                    <th className="py-3 px-2">PRODUCT</th>
                    <th className="py-3 px-2">UNIT PRICE</th>
                    <th className="py-3 px-2">QUANTITY</th>
                    <th className="py-3 px-2">TOTAL</th>
                    <th className="py-3 px-2 text-center">REMOVE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {cart.map((item) => (
                    <tr key={item.id} className="align-middle">
                      {/* Image */}
                      <td className="py-4 px-2">
                        <div className="w-20 h-20 bg-gray-50 border border-gray-100 flex items-center justify-center p-1">
                          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      </td>

                      {/* Product Name */}
                      <td className="py-4 px-2 font-bold text-gray-800 max-w-xs pr-4">{item.name}</td>

                      {/* Unit Price */}
                      <td className="py-4 px-2 font-bold text-gray-800">৳ {item.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>

                      {/* Quantity Controller */}
                      <td className="py-4 px-2">
                        <div className="inline-flex items-center border border-gray-300">
                          <button onClick={() => handleQuantityChange(item.id, -1)} className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 border-r border-gray-300 font-bold">
                            -
                          </button>
                          <span className="px-4 py-1 text-gray-800 font-semibold min-w-8.75 text-center">{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, 1)} className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 border-l border-gray-300 font-bold">
                            +
                          </button>
                        </div>
                      </td>

                      {/* Total Price */}
                      <td className="py-4 px-2 font-bold text-gray-800">৳ {(item.price * item.quantity).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>

                      {/* Remove Button */}
                      <td className="py-4 px-2 text-center">
                        <button onClick={() => handleRemoveItem(item.id)} className="text-gray-700 hover:text-red-600 font-semibold cursor-pointer">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ================= RIGHT SECTION: SUMMARY WIDGET ================= */}
        <div className="w-full lg:w-96 bg-white p-6 rounded-sm shadow-sm border border-gray-100 h-fit space-y-4">
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Subtotal (before discount):</span>
              <span className="font-bold text-gray-900">৳ {subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Discount:</span>
              <span className="font-bold text-gray-900">-৳ {discount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between items-center text-base pt-1">
              <span className="font-bold text-gray-800">
                Total ({totalItems} {totalItems === 1 ? "item" : "items"}):
              </span>
              <span className="font-extrabold text-gray-900">৳ {total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="pt-2">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Apply Promo Code Button */}
          <button
            type="button"
            onClick={() => {
              setShowPromoModal(true);
              setTimeout(() => {
                setShowPromoModal(false);
              }, 4000);
            }}
            className="w-full py-2.5 bg-[#4f00ff] hover:bg-[#4300e6] text-white font-bold text-sm rounded transition-colors cursor-pointer"
          >
            Apply Promo Code
          </button>

          {/* Proceed to Checkout Button */}
          <button
            type="button"
            disabled={cart.length === 0}
            className={`w-full py-2.5 font-bold text-sm rounded transition-colors ${
              cart.length > 0 ? "bg-[#ffc300] hover:bg-[#e6b000] text-black cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
