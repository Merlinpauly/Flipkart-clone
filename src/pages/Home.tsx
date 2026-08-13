import Header from '../components/Header'
import CategoryNav from '../components/CategoryNav'
import Banner from '../components/Banner'
import ProductSection from '../components/ProductSection'
import { products } from '../data/products'

const Home = () => {
    return (
        <div>
            <Header />
            <CategoryNav />
            <Banner />
            <ProductSection
                title="Popular Picks"
                products={products}
            />
        </div>
    )
}

export default Home;