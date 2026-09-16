import CategoryLayout from "../components/CategoryLayout";
import FilterSidebar from "../components/FilterSidebar";
import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";

function Furniture() {
  const [furniture, setFurniture] = useState<Product[]>([]);

  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(20000);

  useEffect(() => {
    async function getFurniture() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const furniture = data.products.filter(
        (product: Product) => product.category === "furniture",
      );
      setFurniture(furniture);
    }
    getFurniture();
  }, []);
  const brands = [
    ...new Set(
      furniture
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = furniture.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      <CategoryLayout
        title="Furniture"
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

export default Furniture;
