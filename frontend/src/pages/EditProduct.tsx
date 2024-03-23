import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ProductsForm from '../components/ProductsForm';
import style from './styles/EditProduct.module.css';
import { ProductType } from '../types/ProductTypes';
import api, { requestData } from '../services/request';
import { NewEntity } from '../types/NewEntity';

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | Partial<NewEntity<ProductType>>>();

  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const prod = await requestData(`products/${id}`);
      setProduct(prod);
    };
    fetch();
  }, [id, setProduct]);

  const playAxios = async (prod: NewEntity<ProductType>) => {
    try {
      const res = await api.put(`/products/${id}`, prod);
      const { message } = res.data;

      setProduct(prod);
      toast.success(message);
    } catch ({ response: { data } }: any) {
      console.error(data);
      toast.error(data.message);
    }
  };

  return (
    <main className={ style.main }>
      <h1>Editar Produto</h1>
      <ProductsForm submitName="Atualizar" playAxios={ playAxios } />
      <div className={ style.product }>
        <h2>{product?.name}</h2>
        <div className={ style.info }>
          <p>{`R$ ${product?.price?.replace('.', ',')}`}</p>
          <p>{`${product?.quantity} disponíveis`}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </main>
  );
}

export default EditProduct;
