import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function WomenWatches() {
  const [womenWatches, setWomenWatches] = useState<Product[]>([]);

  useEffect(() => {
    async function getWomenWatches() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const womenwatches = data.products.filter(
        (product: Product) => product.category === "womens-watches",
      );
      setWomenWatches(womenwatches);
    }
    getWomenWatches();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Women's Watches"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              Rolex
            </label>

            <label>
              <input type="checkbox" />
              Fossil
            </label>

            <label>
              <input type="checkbox" />
              Casio
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
          {womenWatches.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default WomenWatches;
