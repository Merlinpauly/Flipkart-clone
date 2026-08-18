import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Banner from "../components/Banner";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [ beauty , setBeauty] = useState<Product[]>([]);
  const [ fragrance , setFragrance] = useState<Product[]>([]);
  const [ kitchen , setKitchen] = useState<Product[]>([]);

  

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setProducts(data?.products);
      setDeals(data?.products.filter((deal: Product) => deal.category === "home-decoration"));
      setBeauty(data?.products.filter((beauty: Product) => beauty.category === "beauty"));
      setFragrance(data?.products.filter((fragrance: Product)=> fragrance.category === "fragrances"));
      setKitchen(data?.products.filter((kitchen: Product)=> kitchen.category === "kitchen-accessories"));

    }
    getProducts();
  }, []);
  return (
    <div>
      <Header />
      <CategoryNav />
      <Banner />
      <ProductSection title="Popular Picks" products={products} />
      <ProductSection title="Deals of the Day" products={deals} />
      <ProductSection title="Beauty Products" products={beauty} />
      <ProductSection title="Fragrance" products={fragrance} />
      <ProductSection title="Kitchen - Accessories" products={kitchen} />
      <Footer />
    </div>
  );
};

export default Home;
