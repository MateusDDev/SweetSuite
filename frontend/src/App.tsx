import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Products from './components/Products';
import { Product } from './types/api';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts, products]);

  return (
    <>
      <Header />
      <Form />
      <Products
        products={ products }
        setProducts={ setProducts }
      />
      <ToastContainer autoClose={ 3000 } position={ toast.POSITION.BOTTOM_LEFT } />
    </>
  );
}

export default App;
