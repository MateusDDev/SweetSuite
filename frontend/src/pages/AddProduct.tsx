import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ProductsForm from '../components/ProductsForm';
import style from './styles/AddProduct.module.css';
import { ProductType } from '../types/ProductTypes';
import api from '../services/request';
import { NewEntity } from '../types/NewEntity';

function AddProduct() {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  const playAxios = async (prod: NewEntity<ProductType>) => {
    try {
      await api.post('/products', prod);
      toast.success('Produto adicionado com sucesso');
    } catch ({ response: { data } }: any) {
      console.error(data.message);
      toast.error(data.message);
    }
  };

  return (
    <main className={ style.main }>
      <h1>Novo Produto</h1>
      <ProductsForm submitName="Adicionar" playAxios={ playAxios } />
    </main>
  );
}

export default AddProduct;
