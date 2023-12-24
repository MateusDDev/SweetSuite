import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Products from '../components/Products';
import { ProductType } from '../types/api';

function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

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
  }, [setProducts]);

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
