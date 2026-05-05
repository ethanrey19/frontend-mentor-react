import "./ProductCard.css";
import desktopProductImage from "../images/image-product-desktop.jpg";
import mobileProductImage from "../images/image-product-mobile.jpg";
import cartIcon from "../images/icon-cart.svg";

function ProductCard() {
  return (
    <div className="product-card">
      <picture className="product-image">
        <source media="(min-width: 48em)" srcSet={desktopProductImage} />
        <img src={mobileProductImage} alt="Gabrielle Essence Eau De Parfum" />
      </picture>

      <section className="product-info">
        <h3 className="product-category">Perfume</h3>
        <header className="product-title">
          Gabrielle Essence Eau De Parfum
        </header>
        <p className="product-description">
          A floral, solar and interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="product-price">
          <span className="current-price">$149.00</span>
          <span className="original-price">$169.00</span>
        </div>
        <button className="add-to-cart-btn">
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default ProductCard;
