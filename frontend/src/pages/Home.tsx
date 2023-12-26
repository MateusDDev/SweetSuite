import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import Products from '../components/Products';
import ProductsContext from '../context/ProductsContext';

function Home() {
  const { api } = useContext(ProductsContext);
  const { products, setProducts } = api;

  return (
    <>
      <h1>Produtos</h1>
      <Products
        products={ products }
        setProducts={ setProducts }
      />
    </>
  );
}

export default Home;
