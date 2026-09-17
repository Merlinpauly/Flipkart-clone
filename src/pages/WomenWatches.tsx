import { useEffect, useState } from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function WomenWatches() {
  const [womenWatches, setWomenWatches] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(20000);

  useEffect(() => {
    async function getWomenWatches() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const womenwatches = data.products.filter(
        (product: Product) => product.category === "womens-watches",
      );
      setWomenWatches(womenwatches);
    }
    getWomenWatches();
  }, []);

  const brands = [
    ...new Set(
      womenWatches
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = womenWatches.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Women's Watches"
        filters={
          <FilterSidebar
            minPrice={100}
            maxPrice={20000}
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

export default WomenWatches;
