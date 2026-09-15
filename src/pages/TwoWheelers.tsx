import CategoryLayout from "../components/CategoryLayout";
import Footer from "../components/Footer"
// import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useEffect, useState } from "react";


function TwoWheelers() {
    const [ twoWheelers , setTwoWheelers] = useState<Product[]>([]);

    useEffect(() => {   
        async function getTwoWheelers() {
            const response = await fetch("https://dummyjson.com/products?limit=0");
            const data = await response.json();
            const twoWheelers = data.products.filter(
                (product: Product) => product.category === "motorcycle",
            );
            setTwoWheelers(twoWheelers);
        }
        getTwoWheelers();

    }, []);
  return (
    <>
    {/* <Header/> */}
    <CategoryLayout
                title="Two Wheelers"
                filters={
                    <>
                        <h3>Filters</h3>

                        <h4>Price</h4>

                        <input
                            type="range"
                            min="0"
                            max="1000000"
                        />

                        <h4>Brand</h4>

                        <label>
                            <input type="checkbox" />
                            Kawasaki
                        </label>

                        <label>
                            <input type="checkbox" />
                            Ducati
                        </label>

                        <label>
                            <input type="checkbox" />
                            Honda
                        </label>

                        {/* <h4>Type</h4>

                        <label>
                            <input type="checkbox" />
                            Sports Bike
                        </label>

                        <label>
                            <input type="checkbox" />
                            Cruiser
                        </label>

                        <label>
                            <input type="checkbox" />
                            Street Bike
                        </label> */}

                        <h4>Rating</h4>

                        <label>
                            <input type="checkbox" />
                            4★ & above
                        </label>
                    </>
                }
            >

                <div className="mobile-product-list">

                    {twoWheelers.map((product) => (
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


export default TwoWheelers