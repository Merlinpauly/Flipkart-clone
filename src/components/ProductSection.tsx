import type { Product } from  "../types/Product";
import ProductCard from "./ProductCard";
import "../styles/index.css";

interface ProductSectionProps{
    title : string ;
    products : Product[];
}
// this interface section means , productsection needs the title and products array
function ProductSection ( { title , products } : ProductSectionProps){
    return (
        <section className="product-section">
            <h2>{title}</h2>
            <div className="product-list">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
            </div>
        </section>
    );

}
export default ProductSection;