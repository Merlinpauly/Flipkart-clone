// import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function MenWatches() {
  const [menwatch, setMenWatch] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(20000);

  useEffect(() => {
    async function getMenWatches() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const menwatch = data.products.filter(
        (product: Product) => product.category === "mens-watches",
      );
      setMenWatch(menwatch);
    }
    getMenWatches();
  }, []);
  const brands = [
    ...new Set(
      menwatch
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = menwatch.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      <CategoryLayout
        title="Men's Watches"
        filters={
          <FilterSidebar
            minPrice={200}
            maxPrice={2000}
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

      <Footer />
    </>
  );
}

export default MenWatches;
