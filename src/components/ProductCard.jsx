export default function ProductCard({ product, onAdd }) {
  return (
    <article className={`products__card ${product.category}`}>
      <div className="products__shape">
        <img src={product.image} className="products__img" alt={product.name} />
      </div>

      <div className="products__data">
        <h2 className="products__price">
          ${product.price}.00
          <span className="products__quantity"> | Stock: {product.stock}</span>
        </h2>

        <h3 className="products__name">{product.name}</h3>

        <button className="button products__button" onClick={() => onAdd(product)}>
          <i className="bx bx-plus"></i>
        </button>
      </div>
    </article>
  );
}
