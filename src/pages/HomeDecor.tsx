import Footer from "../components/Footer";
// import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function HomeDecor() {
  const [homeDecor, setHomeDecor] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getHomeDeccor() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const homeDecor = data.products.filter(
        (product: Product) => product.category === "home-decoration",
      );
      setHomeDecor(homeDecor);
    }
    getHomeDeccor();
  }, []);
  const brands = [
    ...new Set(
      homeDecor
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = homeDecor.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Home Decor"
        filters={
          <FilterSidebar
            minPrice={20}
            maxPrice={60}
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

export default HomeDecor;
