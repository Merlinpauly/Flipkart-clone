import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function WomenShoes() {
  const [womenShoes, setWomenShoes] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function getWomenShoes() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const womenshoes = data.products.filter(
        (product: Product) => product.category === "womens-shoes",
      );
      setWomenShoes(womenshoes);
    }
    getWomenShoes();
  }, []);
  const brands = [
    ...new Set(
      womenShoes
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = womenShoes.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });

  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Women's Shoes"
        filters={
          <FilterSidebar
            minPrice={10}
            maxPrice={80}
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

export default WomenShoes;
