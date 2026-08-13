import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import { products } from './data/products';
function App() {
  return (
    <>
      <Header />
      <CategoryNav />
      <Banner />
      <ProductSection
        title="Popular Picks"
        products={products}
      />
    </>

  );
}
export default App;