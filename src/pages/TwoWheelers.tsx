import CategoryLayout from "../components/CategoryLayout";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";
// import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";

function TwoWheelers() {
  const [twoWheelers, setTwoWheelers] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(20000);

  useEffect(() => {
    async function getTwoWheelers() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const twoWheelers = data.products.filter(
        (product: Product) => product.category === "motorcycle",
      );
      setTwoWheelers(twoWheelers);
    }
    getTwoWheelers();
  }, []);
  const brands = [
    ...new Set(
      twoWheelers
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = twoWheelers.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });
  return (
    <>
      {/* <Header/> */}
      <CategoryLayout
        title="Two Wheelers"
        filters={
          <FilterSidebar
            minPrice={2000}
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

export default TwoWheelers;
