import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import { Product } from '../types/api';
import Form from '../components/Form';
import { NewProduct } from '../types/form';

function Home() {
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
  }, [setProducts]);

  const playAxios = async (prod: NewProduct) => {
    try {
      const res = await axios.post('http://localhost:5000/products', prod);
      const { message } = res.data;
      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error('Ocorreu um erro.');
    }
  };

  return (
    <>
      <Header />
      <Form playAxios={ playAxios } submitName="Adicionar" />
      <Products
        products={ products }
        setProducts={ setProducts }
      />
    </>
  );
}

export default Home;
