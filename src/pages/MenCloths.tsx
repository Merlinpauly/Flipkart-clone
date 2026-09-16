import { useState, useEffect } from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Product } from "../types/Product";
import CategoryLayout from "../components/CategoryLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

function MenCloths() {
  const [mencloth, setMenCloth] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedMaxPrice, setSelectedMaxPrice] = useState(2000);

  useEffect(() => {
    async function GetCloth() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      const mencloth = data.products.filter(
        (product: Product) => product.category === "mens-shirts",
      );
      setMenCloth(mencloth);
    }
    GetCloth();
  }, []);
  const brands = [
    ...new Set(
      mencloth
        .map((product) => product.brand)
        .filter((brand): brand is string => Boolean(brand)),
    ),
  ];

  const filteredProducts = mencloth.filter((product) => {
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesPrice = product.price <= selectedMaxPrice;

    return matchesBrand && matchesPrice;
  });
  return (
    <>
      {/* <Header /> */}
      <CategoryLayout
        title="Men's Clothing"
        filters={
          <FilterSidebar
            minPrice={10}
            maxPrice={30}
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

export default MenCloths;
