import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ items, onAdd }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? items : items.filter((p) => p.category === filter);

  return (
    <section className="products" id="products">
      <div className="products__container container">
        <ul className="products__filters">
          {["all", "hoodies", "shirts", "sweatshirts"].map((cat) => (
            <li
              key={cat}
              onClick={() => setFilter(cat)}
              className={`products__item ${filter === cat ? "active-product" : ""}`}
            >
              <h3 className="products__title">{cat.toUpperCase()}</h3>
            </li>
          ))}
        </ul>

        <div className="products__content grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
