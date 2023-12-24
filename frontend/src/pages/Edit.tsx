import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Product } from '../types/api';
import { NewProduct } from '../types/form';
import Form from '../components/Form';

function Edit() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(res.data);
    };
    data();
  }, [id]);

  const playAxios = async (prod: NewProduct) => {
    try {
      const res = await axios.put(`http://localhost:5000/products/${id}`, prod);
      const { message } = res.data;
      toast.success(message);
    } catch (error: any) {
      console.log(error);
      toast.error('Ocorreu um erro.');
    }
  };

  return (
    <main>
      <h1>Editar Produto</h1>
      <Form playAxios={ playAxios } submitName="Atualizar" />
      <h2>{product?.name}</h2>
      <div>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.quantity}</p>
      </div>
    </main>
  );
}

export default Edit;
