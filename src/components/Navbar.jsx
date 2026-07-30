import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

function Navbar({ isOpen, cartProductsCount }) {
  return (
    <nav className="fixed top-0 right-0 left-0 z-1000 flex items-center justify-between gap-4 bg-gray-900 px-6 py-3 shadow-lg border-b border-gray-800">
      {/* 1. Shop Logo */}
      <Link to="/" className="cursor-pointer">
        <span className="text-2xl font-black text-white flex items-baseline tracking-tight hover:scale-105 transition-transform">
          Tech<span className="text-emerald-400">Next</span>
          <span className="text-gray-400 text-xs font-semibold ml-1">.com</span>
        </span>
      </Link>

      {/* 2. Deliver To Location */}
      <div className="hidden md:flex items-center gap-1 p-2 cursor-pointer hover:bg-white/10 rounded-lg transition-colors">
        <IoLocationOutline className="text-emerald-400 text-2xl" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Deliver to</span>
          <span className="font-bold text-white text-sm">Bangladesh</span>
        </div>
      </div>

      {/* 3. Search Bar */}
      <div className="flex-1 hidden md:flex items-center h-10 rounded-full overflow-hidden bg-white/95 focus-within:ring-2 focus-within:ring-emerald-500 shadow-inner mx-4">
        <input type="text" placeholder="Search TechNext..." className="w-full h-full px-5 text-gray-800 placeholder-gray-400 outline-none text-sm font-medium bg-transparent" />
        <button className="h-full px-6 bg-gray-200 text-gray-700 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
          <GoSearch size={20} />
        </button>
      </div>

      {/* 4. Account & Lists */}
      <div className="hidden md:flex flex-col cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors">
        <span className="text-xs text-gray-400">Hello, sign in</span>
        <span className="font-bold text-white text-sm">Account & Lists</span>
      </div>

      {/* 5. Returns & Orders */}
      <div className="hidden md:flex flex-col cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors">
        <span className="text-xs text-gray-400">Returns</span>
        <span className="font-bold text-white text-sm">& Orders</span>
      </div>

      {/* 6. Shopping Cart */}
      <button onClick={() => isOpen(true)} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors group">
        <div className="relative">
          <PiShoppingCartLight className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white font-bold text-[11px] rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-gray-900">
            {cartProductsCount}
          </span>
        </div>
        <span className="font-bold text-sm text-white mt-1">Cart</span>
      </button>
    </nav>
  );
}

export default Navbar;
