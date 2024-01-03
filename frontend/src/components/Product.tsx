import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { ProductType } from '../types/api';
import style from './styles/Product.module.css';
import MainContext from '../context/MainContext';

type ProductProps = {
  prod: ProductType,
};

function Product({ prod }: ProductProps) {
  const navigate = useNavigate();
  const { authorization, api } = useContext(MainContext);
  const { user } = authorization;
  const { products, setProducts } = api;
  const [showPopup, setShowPopup] = useState(false);

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
      {user && (
        <>
          <div className={ style.icons }>
            <span className={ style.icon }>
              <FaEdit onClick={ () => navigate(`/edit/${prod.id}`) } />
            </span>
            <span className={ style.icon }>
              <FaTrash onClick={ () => setShowPopup(!showPopup) } />
            </span>
          </div>
          {showPopup && (
            <div className={ style.popup }>
              <p>Tem certeza que deseja deletar o produto?</p>
              <div className={ style.buttons }>
                <button onClick={ () => handleDelete(prod.id) }>Deletar</button>
                <button onClick={ () => setShowPopup(false) }>Cancelar</button>
              </div>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default Product;
