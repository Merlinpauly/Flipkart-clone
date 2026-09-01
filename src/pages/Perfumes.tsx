import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product"
import { useEffect, useState } from "react"
import CategoryLayout from "../components/CategoryLayout"



function Perfumes() {
    const [ perfumes , setPerfumes] = useState<Product[]>([]);

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

  return (
    <>
    <Header/>
    <CategoryLayout
                title="Perfumes"
                filters={
                    <>
                        <h3>Filters</h3>

                        <h4>Price</h4>

                        <input
                            type="range"
                            min="0"
                            max="100000"
                        />

                        <h4>Brand</h4>

                        <label>
                            <input type="checkbox" />
                            Calvin Klein
                        </label>

                        <label>
                            <input type="checkbox" />
                            Gucci
                        </label>

                        <label>
                            <input type="checkbox" />
                            Dior
                        </label>

                        <h4>Fragrance Type</h4>

                        <label>
                            <input type="checkbox" />
                            Eau de Parfum
                        </label>

                        <label>
                            <input type="checkbox" />
                            Eau de Toilette
                        </label>

                        <h4>Rating</h4>

                        <label>
                            <input type="checkbox" />
                            4★ & above
                        </label>
                    </>
                }
            >

                <div className="mobile-product-list">

                    {perfumes.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </CategoryLayout>

    <Footer/>
    </>
  )
}

export default Perfumes