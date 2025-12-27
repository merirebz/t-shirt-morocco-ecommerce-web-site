export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our information</h3>
          <p>Store</p>
          <p>Morocco</p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>
          <div className="footer__social">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
