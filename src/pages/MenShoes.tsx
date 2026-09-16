// import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function MenShoes() {
  const [menshoe, setMenShoe] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function GetMenShoe() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const menshoe = data.products.filter(
        (product: Product) => product.category === "mens-shoes",
      );
      setMenShoe(menshoe);
    }
    GetMenShoe();
  }, []);
  const brands = [
    ...new Set(
      menshoe
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = menshoe.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });
  return (
    <>
      <CategoryLayout
        title="Men's Shoes"
        filters={
          <FilterSidebar
            minPrice={70}
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

export default MenShoes;
