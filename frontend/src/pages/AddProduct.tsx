import axios from 'axios';
import { toast } from 'react-toastify';
import Form from '../components/Form';
import { NewProduct } from '../types/form';
import style from './styles/AddProduct.module.css';

function AddProduct() {
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
    <main className={ style.main }>
      <h1>Novo Produto</h1>
      <Form playAxios={ playAxios } submitName="Adicionar" />
    </main>
  );
}

export default AddProduct;
