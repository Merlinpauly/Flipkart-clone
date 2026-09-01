import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function HomeDecor() {
  const [homeDecor, setHomeDecor] = useState<Product[]>([]);

  useEffect(() => {
    async function getHomeDeccor() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const homeDecor = data.products.filter(
        (product: Product) => product.category === "home-decoration",
      );
      setHomeDecor(homeDecor);
    }
    getHomeDeccor();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Home Decor"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            {/* <h4>Category</h4>

            <label>
              <input type="checkbox" />
              Wall Decor
            </label>

            <label>
              <input type="checkbox" />
              Lighting
            </label>

            <label>
              <input type="checkbox" />
              Furniture
            </label>

            <h4>Material</h4>

            <label>
              <input type="checkbox" />
              Wood
            </label>

            <label>
              <input type="checkbox" />
              Metal
            </label>

            <label>
              <input type="checkbox" />
              Glass
            </label> */}

            <h4>Rating</h4>

            <label>
              <input type="checkbox" />
              4★ & above
            </label>
          </>
        }
      >
        <div className="mobile-product-list">
          {homeDecor.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default HomeDecor;
