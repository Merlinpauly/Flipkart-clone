import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function Skincare() {
  const [skincare, setSkincare] = useState<Product[]>([]);

  useEffect(() => {
    async function getSkincare() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const skincare = data.products.filter(
        (product: Product) => product.category === "skin-care",
      );
      setSkincare(skincare);
    }
    getSkincare();
  }, []);

  return (
    <>
      <Header />
      <CategoryLayout
        title="Skincare"
        filters={
          <>
            <h3>Filters</h3>

            <h4>Price</h4>

            <input type="range" min="0" max="100000" />

            <h4>Brand</h4>

            <label>
              <input type="checkbox" />
              CeraVe
            </label>

            <label>
              <input type="checkbox" />
              Cetaphil
            </label>

            <label>
              <input type="checkbox" />
              Neutrogena
            </label>

            <h4>Product Type</h4>

            <label>
              <input type="checkbox" />
              Moisturizer
            </label>

            <label>
              <input type="checkbox" />
              Cleanser
            </label>

            <label>
              <input type="checkbox" />
              Serum
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
          {skincare.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>

      <Footer />
    </>
  );
}

export default Skincare;
