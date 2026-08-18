import type { Product } from "../types/Product";
import "../styles/index.css";

interface ProductCardProps {
    product: Product; 
}
// this interface means , the productcard receives props called product , that product follow the Product rules means type check
function ProductCard({ product }: ProductCardProps){
    return (
         <div className="product-card">
            <img src={product.thumbnail} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <span>{product.category}</span>


         </div>

    );

}
export default ProductCard;