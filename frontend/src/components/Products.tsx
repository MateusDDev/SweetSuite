/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Product } from '../types/api';

type ProductsProps = {
  products: Product[]
};

function Products({ products }: ProductsProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={ prod.id }>
            <td>{prod.name}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity}</td>
            <td>{prod.created_at}</td>
            <td>{prod.updated_at}</td>
            <td>
              <FaEdit />
            </td>
            <td>
              <FaTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Products;
