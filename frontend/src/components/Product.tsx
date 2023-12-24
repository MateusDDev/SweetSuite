import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ProductType } from '../types/api';
import style from './styles/Product.module.css';

type ProductProps = {
  prod: ProductType,
  products: ProductType[],
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
};

function Product({ prod, products, setProducts }: ProductProps) {
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:5000/products/${id}`);
      const { message } = res.data;
      const newProducts = products.filter((item) => item.id !== id);

      setProducts(newProducts);
      toast.success(message);
    } catch (error: any) {
      console.log(error.message);
      toast.error('Erro ao excluir o produto.');
    }
  };

  return (
    <li className={ style.product }>
      <div className={ style.info }>
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
        <p>{`R$ ${prod.price}`}</p>
      </div>
      <div className={ style.icons }>
        <span>
          <FaEdit onClick={ () => navigate(`/edit/${prod.id}`) } />
        </span>
        <span>
          <FaTrash onClick={ () => handleDelete(prod.id) } />
        </span>
      </div>
    </li>
  );
}

export default Product;
