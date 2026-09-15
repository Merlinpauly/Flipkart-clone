import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer"
// import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react"


function SportsAccessories() {
    const [sportsAccessories , setSportsAccessories] = useState<Product[]>([]);

    useEffect(() => {
        async function getSportsAccessories(){
            const response = await fetch("https://dummyjson.com/products?limit=0");
            const data = await response.json();
            const sportsAccessories = data.products.filter(
                (product: Product) => product.category === "sports-accessories",
            );
            setSportsAccessories(sportsAccessories);
        }
        getSportsAccessories();
    }, []);

  return (
    <>
    {/* <Header/> */}
    <CategoryLayout
                title="Sports Accessories"
                filters={
                    <>
                        <h3>Filters</h3>

                        <h4>Price</h4>

                        <input
                            type="range"
                            min="0"
                            max="100000"
                        />

                        <h4>Category</h4>

                        <label>
                            <input type="checkbox" />
                            Fitness
                        </label>

                        <label>
                            <input type="checkbox" />
                            Sports Equipment
                        </label>

                        <label>
                            <input type="checkbox" />
                            Outdoor Sports
                        </label>

                        <h4>Brand</h4>

                        <label>
                            <input type="checkbox" />
                            Nike
                        </label>

                        <label>
                            <input type="checkbox" />
                            Adidas
                        </label>

                        <label>
                            <input type="checkbox" />
                            Puma
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

                    {sportsAccessories.map((product) => (
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


export default SportsAccessories