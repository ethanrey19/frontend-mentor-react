import "./ProductCardPage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import ProductCard from "../components/ProductCard";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";

function ProductCardPage() {
  usePageTitle("Product Card - Ethan Reynolds");
  usePageBackground("hsl(0, 0%, 100%)");
  return (
    <ProjectLayout>
      <div className="product-card-page">
        <ProductCard />
      </div>
    </ProjectLayout>
  );
}

export default ProductCardPage;
