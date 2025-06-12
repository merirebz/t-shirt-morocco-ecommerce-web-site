import { useState } from "react";

export default function Header({ cartCount, onToggleCart }) {
  const [dark, setDark] = useState(false);

  return (
    <header className={`header ${dark ? "dark-theme" : ""}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/assets/img/favicon.png" className="imgr" alt="" />
          <p>STORE</p>
        </a>

        <div className="nav__btns">
          <i
            className={`bx ${dark ? "bx-sun" : "bxs-moon"}`}
            onClick={() => setDark(!dark)}
          ></i>

          <div className="nav__shop" onClick={onToggleCart}>
            <i className="bx bxs-shopping-bags"></i>
            <span className="count">{cartCount}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
