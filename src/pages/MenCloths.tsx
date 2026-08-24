import  { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";

function MenCloths() {
  const [mencloth, setMenCloth] = useState<Product[]>([]);

  useEffect(() => {
    async function GetCloth() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const mencloth = data.products.filter(
        (product: Product) => product.category === "mens-shirts",
      );
      setMenCloth(mencloth);
    }
    GetCloth();
  }, []);
  return (
    <>
      <Header />
      <CategoryLayout
            title="Men's Clothing"
            filters={
                <>
                    <h3>Filters</h3>

                    <h4>Price</h4>

                    <input
                        type="range"
                        min="0"
                        max="100000"
                    />

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
                        <input type="checkbox" />
                        S
                    </label>

                    <label>
                        <input type="checkbox" />
                        M
                    </label>

                    <label>
                        <input type="checkbox" />
                        L
                    </label>
                </>
            }
        >

            <div className="mobile-product-list">

                {mencloth.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>
        </CategoryLayout>
      <Footer />
    </>
  );
}

export default MenCloths;
