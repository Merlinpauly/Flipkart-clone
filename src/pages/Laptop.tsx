import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.css";
import { useState, useEffect } from "react";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function Laptop() {
  const [laptop, setLaptop] = useState<Product[]>([]);

  useEffect(() => {
    async function getLaptop() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const laptop = data.products.filter(
        (product: Product) => product.category === "laptops",
      );

      setLaptop(laptop);
    }
    getLaptop();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Laptops"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>
            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              Apple
            </label>

            <label>
              <input type="checkbox" />
              Dell
            </label>

            <label>
              <input type="checkbox" />
              Lenovo
            </label>

            <h4>RAM</h4>

            <label>
              <input type="checkbox" />8 GB
            </label>

            <label>
              <input type="checkbox" />
              16 GB
            </label>
          </>
        }
      >
        <div className="mobile-product-list">
          {laptop.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default Laptop;
