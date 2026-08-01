import { products } from "../data/product";

export default function ProductList({ onAddToCart }) {
  const handleAddToCartClick = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col overflow-hidden border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-[#f4f4f4] p-6 h-56 w-full">
              <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Product Details */}
            <div className="flex flex-1 flex-col p-5">
              <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">{product.category}</div>
              <h3 className="text-md font-bold text-gray-800 leading-snug line-clamp-2 mb-2" title={product.name}>
                {product.name}
              </h3>

              <div className="mt-auto">
                <p className="text-xl font-extrabold text-gray-900 mt-2">৳ {product.price.toLocaleString("en-IN")}</p>
                <button
                  type="button"
                  onClick={() => handleAddToCartClick(product)}
                  className="w-full mt-4 rounded-md bg-[#ffc300] px-4 py-2.5 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#e6b000] active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
