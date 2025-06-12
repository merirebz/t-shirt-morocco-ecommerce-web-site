import { useState } from "react";
import { products as data } from "./data/products";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./style.css"
export default function App() {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        if (exists.amount >= product.stock) return prev;
        return prev.map((p) =>
          p.id === product.id ? { ...p, amount: p.amount + 1 } : p
        );
      }

      return [...prev, { ...product, amount: 1 }];
    });
  };

  const removeOne = (item) => {
    setCart((prev) =>
      item.amount === 1
        ? prev.filter((p) => p.id !== item.id)
        : prev.map((p) =>
            p.id === item.id ? { ...p, amount: p.amount - 1 } : p
          )
    );
  };

  const deleteItem = (item) =>
    setCart((prev) => prev.filter((p) => p.id !== item.id));

  const checkout = () => {
    setItems((prev) =>
      prev.map((p) =>
        cart.find((c) => c.id === p.id)
          ? { ...p, stock: p.stock - cart.find((c) => c.id === p.id).amount }
          : p
      )
    );
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.length} onToggleCart={() => setOpenCart(!openCart)} />
      <Products items={items} onAdd={addToCart} />
      <Cart
        open={openCart}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeOne}
        onDelete={deleteItem}
        onCheckout={checkout}
      />
      <Footer />
    </>
  );
}
