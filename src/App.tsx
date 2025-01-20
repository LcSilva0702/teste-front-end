import Header from './components/Header/Header';
import PromoBanner from './components/PromoBanner/PromoBanner';
import './App.scss'
import CategorysButtons from './components/CategorysButtons/CategorysButtons';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Carousel from './components/Products/Products';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <PromoBanner />
        <CategorysButtons />
        <RelatedProducts />
        <Carousel />
      </div>
    </>
  )
}

export default App
