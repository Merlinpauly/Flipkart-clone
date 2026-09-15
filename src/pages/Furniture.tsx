import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";

function Furniture() {
  const [furniture, setFurniture] = useState<Product[]>([]);

  useEffect(() => {
    async function getFurniture() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const furniture = data.products.filter(
        (product: Product) => product.category === "furniture",
      );
      setFurniture(furniture);
    }
    getFurniture();
  }, []);

  return (
    <>
     

      <CategoryLayout
        title="Furniture"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Category</h4>

            <label>
              <input type="checkbox" />
              Beds
            </label>

            <label>
              <input type="checkbox" />
              Sofas
            </label>

            <label>
              <input type="checkbox" />
              Tables
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

            <h4>Rating</h4>

            <label>
              <input type="checkbox" />
              4★ & above
            </label>
          </>
        }
      >
        <div className="mobile-product-list">
          {furniture.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default Furniture;
