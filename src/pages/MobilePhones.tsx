import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.css";
import ProductCard from "../components/ProductCard";
import CategoryLayout from "../components/CategoryLayout";
function MobilePhones() {
  const [mobileProducts, setMobileproducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getMobileProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const mobiles = data.products.filter(
        (product: Product) => product.category === "smartphones",
      );
      setMobileproducts(mobiles);
    }
    getMobileProducts();
  }, []);
  return (
    <>
      <Header />
      <main className="mobile-page">
        <CategoryLayout
          title="Mobile Phones"
          filters={
            <>
              <h3>Filters</h3>

              <h4>Price</h4>

              <input type="range" min="0" max="100000" />

              <h4>Brand</h4>

              <label>
                <input type="checkbox" />
                Samsung
              </label>

              <label>
                <input type="checkbox" />
                Apple
              </label>

              <label>
                <input type="checkbox" />
                Xiaomi
              </label>
            </>
          }
        >
          <div className="mobile-product-list">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </CategoryLayout>
      </main>
      <Footer />
    </>
  );
}

export default MobilePhones;
