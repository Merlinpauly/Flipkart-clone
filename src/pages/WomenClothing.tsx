import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function WomenClothing() {
  const [womenClothing, setWomenClothing] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getWomenClothing() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const womenclothing = data.products.filter(
        (product: Product) => product.category === "womens-dresses",
      );
      setWomenClothing(womenclothing);
    }
    getWomenClothing();
  }, []);
  const brands = [
    ...new Set(
      womenClothing
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = womenClothing.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Women's Clothing"
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
export default WomenClothing;
