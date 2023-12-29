import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ProductType } from '../types/api';
import style from './styles/Product.module.css';
import MainContext from '../context/MainContext';
import useLocalStorage from '../hooks/useLocalStore';

type ProductProps = {
  prod: ProductType,
};

function Product({ prod }: ProductProps) {
  const [authorization] = useLocalStorage('authorization', '');
  const { api } = useContext(MainContext);
  const { products, setProducts } = api;
  const navigate = useNavigate();

  const handleDelete = async (id: number | undefined) => {
    try {
      const res = await axios.delete(`http://localhost:5000/products/${id}`);
      const { message } = res.data;
      const newProducts = products.filter((item) => item.id !== id);

      setProducts(newProducts);
      toast.success(message);
    } catch (error: any) {
      console.error(error.message);
      toast.error('Erro ao excluir o produto.');
    }
  };

  return (
    <li className={ style.product }>
      <div className={ style.info }>
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
        <p className={ style.price }>{`R$ ${prod.price}`}</p>
      </div>
      {authorization && (
        <div className={ style.icons }>
          <span className={ style.icon }>
            <FaEdit onClick={ () => navigate(`/edit/${prod.id}`) } />
          </span>
          <span className={ style.icon }>
            <FaTrash onClick={ () => handleDelete(prod.id) } />
          </span>
        </div>
      )}
    </li>
  );
}

export default Product;
