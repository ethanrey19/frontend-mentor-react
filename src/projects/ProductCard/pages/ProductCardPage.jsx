import "./ProductCardPage.css";
import ProductCard from "../components/ProductCard";
import HomeButton from "../../../components/HomeButton/HomeButton";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";

function ProductCardPage() {
    usePageTitle("Product Card - Ethan Reynolds");
    usePageBackground("hsl(0, 0%, 100%)");
  return (
    <div className="product-card-page">
      <ProductCard />
      <HomeButton />
    </div>
  );
}

export default ProductCardPage;
