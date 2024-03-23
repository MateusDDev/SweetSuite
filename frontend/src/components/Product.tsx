import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import style from './styles/Product.module.css';
import MainContext from '../context/MainContext';
import { ProductType } from '../types/ProductTypes';
import api from '../services/request';
import { LoginContext } from '../context/LoginContext';

type ProductProps = {
  prod: ProductType,
};

function Product({ prod }: ProductProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(LoginContext);
  const { products, setProducts } = useContext(MainContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async (id: number | undefined) => {
    try {
      await api.delete(`/products/${id}`);
      const newProducts = products.filter((item) => item.id !== id);

      setProducts(newProducts);
      toast.success('Produto deletado com sucesso');
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
        <p className={ style.price }>{`R$ ${prod.price.replace('.', ',')}`}</p>
      </div>
      {isAuthenticated && (
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
