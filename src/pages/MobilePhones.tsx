import { useEffect, useState } from "react";

import type { Product } from "../types/Product";

import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryLayout from "../components/CategoryLayout";
import FilterSidebar from "../components/FilterSidebar";

import "../styles/index.css";

function MobilePhones() {
  const [mobileProducts, setMobileproducts] = useState<Product[]>([]);

  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

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

  const brands = [
    ...new Set(
      mobileProducts
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = mobileProducts.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      <main className="mobile-page">
        <CategoryLayout
          title="Mobile Phones"
          filters={
            <FilterSidebar
              minPrice={200}
              maxPrice={1500}
              brands={brands}
              selectedBrand={selectedBrand}
              selectedMaxPrice={selectedMaxPrice}
              onBrandChange={setSelectedBrand}
              onPriceChange={setSelectedMaxPrice}
            />
          }
        >
          <div className="mobile-product-list">
            {filteredProducts.map((product) => (
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
