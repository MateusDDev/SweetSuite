import { useState } from 'react';
import { toast } from 'react-toastify';
import style from './styles/ProductsForm.module.css';
import { ProductType } from '../types/ProductTypes';
import { NewEntity } from '../types/NewEntity';

type FormProps = {
  playAxios: (prod: NewEntity<ProductType>) => Promise<void>,
  submitName: string,
};

function ProductsForm({ playAxios, submitName }: FormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !quantity || !price) {
      return toast.warning('Preencha todos os dados');
    }

    if (!price) setPrice('0');
    if (!quantity) setQuantity('0');

    const newProduct: NewEntity<ProductType> = {
      name,
      description,
      price: price.replace(',', '.'),
      quantity,
    };

    playAxios(newProduct);

    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const handlePrice = (newPrice: string) => {
    const regex = /^(?:\d{1,10}(,\d{0,2})?)?$/;
    if (regex.test(newPrice)) {
      setPrice(newPrice);
    }
  };

  const handleQuantity = (newQuantity: string) => {
    const regex = /^\d{0,10}$/;
    if (regex.test(newQuantity)) {
      setQuantity(newQuantity);
    }
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
            onChange={ ({ target }) => handlePrice(target.value) }
          />
        </label>
        <label className={ style.label }>
          <span className={ style.labelText }>Quantidade</span>
          <input
            className={ style.input }
            type="text"
            name="quantity"
            value={ quantity }
            onChange={ ({ target }) => handleQuantity(target.value) }
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

export default ProductsForm;
