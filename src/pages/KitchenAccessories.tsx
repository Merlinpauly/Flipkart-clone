import { useEffect, useState } from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function KitchenAccessories() {
  const [kitchenAccessories, setKitchenAccessories] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);
  useEffect(() => {
    async function getKitchenAccessories() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const kitchenAccessories = data.products.filter(
        (product: Product) => product.category === "kitchen-accessories",
      );
      setKitchenAccessories(kitchenAccessories);
    }
    getKitchenAccessories();
  }, []);
  const brands = [
    ...new Set(
      kitchenAccessories
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = kitchenAccessories.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Kitchen Accessories"
        filters={
          <FilterSidebar
            minPrice={0}
            maxPrice={100}
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

export default KitchenAccessories;
