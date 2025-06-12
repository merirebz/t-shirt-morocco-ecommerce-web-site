export default function Cart({ open, cart, onAdd, onRemove, onDelete, onCheckout }) {
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0);

  return (
    <div className={`cart ${open ? "show-cart" : ""}`}>
      <h2 className="cart__title-center">My Cart</h2>

      <div className="cart__container">
        {cart.length === 0 ? (
          <div className="cart__empty">
            <img src="/assets/img/empty-cart.png" alt="empty" />
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart__card" key={item.id}>
              <img src={item.image} className="cart__img" />

              <div className="cart__details">
                <h3>{item.name}</h3>

                <span>Stock: {item.stock}</span>
                <span>${item.price}.00</span>

                <div className="cart__amount-content">
                  <i className="bx bx-minus" onClick={() => onRemove(item)}></i>
                  <span>{item.amount}</span>
                  <i className="bx bx-plus" onClick={() => onAdd(item)}></i>
                </div>

                <i className="bx bx-trash-alt" onClick={() => onDelete(item)}></i>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart__prices">
        <span>{cart.length} items</span>
        <span>${total}.00</span>
      </div>

      {cart.length > 0 && (
        <button className="button cart__btn" onClick={onCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
}
