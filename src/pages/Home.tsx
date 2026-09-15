// import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";

interface HomeProps {
  search: string;
}

function Home({ search }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [beauty, setBeauty] = useState<Product[]>([]);
  const [fragrance, setFragrance] = useState<Product[]>([]);
  const [kitchen, setKitchen] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setProducts(data?.products);
      setDeals(
        data?.products.filter(
          (deal: Product) => deal.category === "home-decoration",
        ),
      );
      setBeauty(
        data?.products.filter(
          (beauty: Product) => beauty.category === "beauty",
        ),
      );
      setFragrance(
        data?.products.filter(
          (fragrance: Product) => fragrance.category === "fragrances",
        ),
      );
      setKitchen(
        data?.products.filter(
          (kitchen: Product) => kitchen.category === "kitchen-accessories",
        ),
      );
    }
    getProducts();
  }, []);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredDeals = deals.filter((deal) =>
    deal.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredBeauty = beauty.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredFragrance = fragrance.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredKitchen = kitchen.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <CategoryNav />

      <Banner />

      <ProductSection title="Popular Picks" products={filteredProducts} />

      <ProductSection title="Deals of the Day" products={filteredDeals} />

      <ProductSection title="Beauty Products" products={filteredBeauty} />

      <ProductSection title="Fragrance" products={filteredFragrance} />

      <ProductSection
        title="Kitchen - Accessories"
        products={filteredKitchen}
      />

      <Footer />
    </div>
  );
}

export default Home;
