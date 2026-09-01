import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

function WomenShoes() {
  const [womenShoes, setWomenShoes] = useState<Product[]>([]);

  useEffect(() => {
    async function getWomenShoes() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const womenshoes = data.products.filter(
        (product: Product) => product.category === "womens-shoes",
      );
      setWomenShoes(womenshoes);
    }
    getWomenShoes();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Women's Shoes"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              Nike
            </label>

            <label>
              <input type="checkbox" />
              Adidas
            </label>

            <label>
              <input type="checkbox" />
              Puma
            </label>

            <h4>Size</h4>

            <label>
              <input type="checkbox" />6
            </label>

            <label>
              <input type="checkbox" />7
            </label>

            <label>
              <input type="checkbox" />8
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
          {womenShoes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>
      <Footer />
    </>
  );
}

export default WomenShoes;
