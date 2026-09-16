import Footer from "../components/Footer";
// import Header from "../components/Header";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function Skincare() {
  const [skincare, setSkincare] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getSkincare() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const skincare = data.products.filter(
        (product: Product) => product.category === "skin-care",
      );
      setSkincare(skincare);
    }
    getSkincare();
  }, []);

  const brands = [
    ...new Set(
      skincare
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand))
    ),
  ];

  const filteredProducts = skincare.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Skincare"
        filters={
          <FilterSidebar
              minPrice={0}
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

export default Skincare;
