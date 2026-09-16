import CategoryLayout from "../components/CategoryLayout";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";

function Makeup() {
  const [makeup, setMakeup] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getMakeup() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const makeup = data.products.filter(
        (product: Product) => product.category === "beauty",
      );

      setMakeup(makeup);
    }
    getMakeup();
  }, []);
  const brands = [
    ...new Set(
      makeup
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = makeup.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Makeup"
        filters={
          <FilterSidebar
            minPrice={5}
            maxPrice={20}
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

export default Makeup;
