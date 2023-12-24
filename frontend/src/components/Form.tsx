import { useState } from 'react';
import { toast } from 'react-toastify';
import { NewProduct } from '../types/form';
import style from './styles/Form.module.css';

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
    <form onSubmit={ handleSubmit } className={ style.form }>
      <div className={ style.fields }>
        <label className={ style.label }>
          <span className={ style.labelText }>Nome</span>
          <input
            className={ style.input }
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label className={ style.label }>
          <span className={ style.labelText }>Preço</span>
          <input
            className={ style.input }
            type="text"
            name="price"
            value={ price }
            onChange={ ({ target }) => setPrice(target.value) }
          />
        </label>
        <label className={ style.label }>
          <span className={ style.labelText }>Quantidade</span>
          <input
            className={ style.input }
            type="text"
            name="quantity"
            value={ quantity }
            onChange={ ({ target }) => setQuantity(target.value) }
          />
        </label>
        <label className={ style.label }>
          <span className={ style.labelText }>Descrição</span>
          <input
            className={ style.input }
            type="text"
            name="description"
            value={ description }
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </label>
      </div>
      <div className={ style.btnContainer }>
        <button type="submit" className={ style.btn }>{submitName}</button>
      </div>
    </form>
  );
}

export default Form;
