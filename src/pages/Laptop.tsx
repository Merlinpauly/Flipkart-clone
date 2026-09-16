import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/index.css";
import { useState, useEffect } from "react";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function Laptop() {
  const [laptop, setLaptop] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(20000);

  useEffect(() => {
    async function getLaptop() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const laptop = data.products.filter(
        (product: Product) => product.category === "laptops",
      );

      setLaptop(laptop);
    }
    getLaptop();
  }, []);

  const brands = [
    ...new Set(
      laptop
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = laptop.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Laptops"
        filters={
          <FilterSidebar
            minPrice={1000}
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

export default Laptop;
