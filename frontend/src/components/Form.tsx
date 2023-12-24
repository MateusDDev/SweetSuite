import { useState } from 'react';
import { toast } from 'react-toastify';
import { NewProduct } from '../types/form';

type FormProps = {
  playAxios: (prod: NewProduct) => Promise<void>,
  submitName: string,
};

function Form({ playAxios, submitName }: FormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !price || !quantity) {
      return toast.warning('Preencha todos os dados');
    }

    const newProduct: NewProduct = {
      name,
      description,
      price,
      quantity,
    };

    playAxios(newProduct);

    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>
          Nome
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label>
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </label>
        <label>
          Preço
          <input
            type="text"
            name="price"
            value={ price }
            onChange={ ({ target }) => setPrice(target.value) }
          />
        </label>
        <label>
          Quantidade
          <input
            type="text"
            name="quantity"
            value={ quantity }
            onChange={ ({ target }) => setQuantity(target.value) }
          />
        </label>
      </div>
      <button type="submit">{submitName}</button>
    </form>
  );
}

export default Form;
