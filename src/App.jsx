import NavBar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShopingCart";
import { ItemAddedModal, CartEmptyModal } from "./components/ModalDialogs";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [CartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cartEmptyModal, setCartEmptyModal] = useState(false);
  let orderQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
  };

  // Function to remove a product from the cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setCartEmptyModal(true);

    setTimeout(() => {
      setCartEmptyModal(false);
    }, 2000);
  };

  // Function to update the quantity (+/-)
  const handleUpdateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + amount;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }),
    );
  };
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <CartDrawer isOpen={CartOpen} onClose={() => setCartOpen(false)} cartProducts={cartItems} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} />
        <NavBar isOpen={setCartOpen} cartProductsCount={orderQuantity} />
        <ItemAddedModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
        <CartEmptyModal isOpen={cartEmptyModal} onClose={() => setCartEmptyModal(false)} />
        <div className="pt-18 grow">
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
            <Route path="/my-cart" element={<ShoppingCart cart={cartItems} handleQuantityChange={handleUpdateQuantity} handleRemoveItem={handleRemoveFromCart} handleClearCart={handleClearCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
