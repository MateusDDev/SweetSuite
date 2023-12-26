import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ProductType } from '../types/api';
import Form from '../components/Form';
import style from './styles/EditProduct.module.css';

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(res.data);
    };
    data();
  }, [id]);

  const playAxios = async (prod: ProductType) => {
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
    <main className={ style.main }>
      <h1>Editar Produto</h1>
      <Form playAxios={ playAxios } submitName="Atualizar" />
      <div className={ style.product }>
        <h2>{product?.name}</h2>
        <div className={ style.info }>
          <p>{`R$ ${product?.price}`}</p>
          <p>{`${product?.quantity} disponíveis`}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </main>
  );
}

export default EditProduct;
