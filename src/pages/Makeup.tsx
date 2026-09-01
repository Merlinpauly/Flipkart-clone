import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";

function Makeup() {
  const [makeup, setMakeup] = useState<Product[]>([]);

  useEffect(() => {
    async function getMakeup() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const makeup = data.products.filter(
        (product: Product) => product.category === "beauty",
      );

      setMakeup(makeup);
    }
    getMakeup();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Makeup"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              Essence
            </label>

            <label>
              <input type="checkbox" />
              Maybelline
            </label>

            <label>
              <input type="checkbox" />
              L'Oréal
            </label>

            <h4>Category</h4>

            <label>
              <input type="checkbox" />
              Lipstick
            </label>

            <label>
              <input type="checkbox" />
              Foundation
            </label>

            <label>
              <input type="checkbox" />
              Eyeshadow
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
          {makeup.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>
      <Footer />
    </>
  );
}

export default Makeup;
