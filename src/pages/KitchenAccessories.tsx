import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function KitchenAccessories() {
  const [kitchenAccessories, setKitchenAccessories] = useState<Product[]>([]);
  useEffect(() => {
    async function getKitchenAccessories() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const kitchenAccessories = data.products.filter(
        (product: Product) => product.category === "kitchen-accessories",
      );
      setKitchenAccessories(kitchenAccessories);
    }
    getKitchenAccessories();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Kitchen Accessories"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Category</h4>

            <label>
              <input type="checkbox" />
              Kitchen Tools
            </label>

            <label>
              <input type="checkbox" />
              Cookware
            </label>

            <label>
              <input type="checkbox" />
              Storage
            </label>

            <h4>Material</h4>

            <label>
              <input type="checkbox" />
              Stainless Steel
            </label>

            <label>
              <input type="checkbox" />
              Plastic
            </label>

            <label>
              <input type="checkbox" />
              Wood
            </label>

            <h4>Rating</h4>

            <label>
              <input type="checkbox" />
              4★ & above
            </label>
          </>
        }
      >
        <div className="mobile-product-list">
          {kitchenAccessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default KitchenAccessories;
