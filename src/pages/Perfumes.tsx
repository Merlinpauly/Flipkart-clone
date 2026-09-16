import Footer from "../components/Footer";
// import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import FilterSidebar from "../components/FilterSidebar";

function Perfumes() {
  const [perfumes, setPerfumes] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getPerfumes() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const perfumes = data.products.filter(
        (product: Product) => product.category === "fragrances",
      );
      setPerfumes(perfumes);
    }
    getPerfumes();
  }, []);
  const brands = [
    ...new Set(
      perfumes
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = perfumes.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      <CategoryLayout
        title="Perfumes"
        filters={
          <FilterSidebar
            minPrice={40}
            maxPrice={150}
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

export default Perfumes;
