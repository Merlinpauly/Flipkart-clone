import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

function WomenBags() {
  const [womenbags, setWomenBags] = useState<Product[]>([]);

  useEffect(() => {
    async function getWomenBags() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const womenbags = data.products.filter(
        (product: Product) => product.category === "womens-bags",
      );
      setWomenBags(womenbags);
    }
    getWomenBags();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Women's Bags"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              Chanel
            </label>

            <label>
              <input type="checkbox" />
              Gucci
            </label>

            <label>
              <input type="checkbox" />
              Prada
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
          {womenbags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>
      <Footer />
    </>
  );
}

export default WomenBags;
