import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ProductsForm from '../components/ProductsForm';
import style from './styles/AddProduct.module.css';
import { ProductType } from '../types/api';

function AddProduct() {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  const playAxios = async (prod: ProductType) => {
    try {
      const res = await axios.post('http://localhost:5000/products', prod);
      const { message } = res.data;
      toast.success(message);
    } catch (error: any) {
      console.error(error);
      toast.error('Ocorreu um erro.');
    }
  };

  return (
    <main className={ style.main }>
      <h1>Novo Produto</h1>
      <ProductsForm playAxios={ playAxios } submitName="Adicionar" />
    </main>
  );
}

export default AddProduct;
