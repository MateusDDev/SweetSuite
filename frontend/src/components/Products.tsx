import { useContext } from 'react';
import style from './styles/Products.module.css';
import Product from './Product';
import MainContext from '../context/MainContext';

function Products() {
  const { products, queryData, setQueryData } = useContext(MainContext);

  const hasResutls = queryData && queryData.length > 0;
  const displayingProducts = hasResutls ? queryData : products;

  return (
    <>
      <button
        className={
        `${style.clear} ${hasResutls ? style.showClear : style.hideClear}`
        }
        onClick={ () => setQueryData([]) }
      >
        Limpar Pesquisa
      </button>
      <ul className={ style.products }>
        {displayingProducts.map((product) => (
          <Product
            key={ product.id }
            prod={ product }
          />
        ))}
      </ul>
    </>
  );
}

export default Products;
