import style from './styles/Products.module.css';
import Product from './Product';
import { ProductType } from '../types/api';

type ProductsProps = {
  products: ProductType[],
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
};

function Products({ products, setProducts }: ProductsProps) {
  return (
    <ul className={ style.products }>
      {products.map((product) => (
        <Product
          key={ product.id }
          prod={ product }
          products={ products }
          setProducts={ setProducts }
        />
      ))}
    </ul>
  );
}

export default Products;
