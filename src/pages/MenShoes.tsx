// import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function MenShoes() {
  const [menshoe, setMenShoe] = useState<Product[]>([]);

  useEffect(() => {
    async function GetMenShoe() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const menshoe = data.products.filter(
        (product: Product) => product.category === "mens-shoes",
      );
      setMenShoe(menshoe);
    }
    GetMenShoe();
  }, []);
  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Men's Shoes"
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
              <input type="checkbox" />7
            </label>

            <label>
              <input type="checkbox" />8
            </label>

            <label>
              <input type="checkbox" />9
            </label>
          </>
        }
      >
        <div className="mobile-product-list">
          {menshoe.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </CategoryLayout>
      <Footer />
    </>
  );
}

export default MenShoes;
