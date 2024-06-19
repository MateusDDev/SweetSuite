import { useContext } from 'react';
import style from './styles/Products.module.css';
import Product from './Product';
import MainContext from '../context/MainContext';
import Loading from './Loading';

function Products() {
  const { products, queryData, setQueryData } = useContext(MainContext);

  const hasResults = queryData && queryData.length > 0;
  const displayingProducts = hasResults ? queryData : products;

  if (displayingProducts.length === 0) return <Loading />;

  return (
    <>
      <button
        className={
        `${style.clear} ${hasResults ? style.showClear : style.hideClear}`
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
