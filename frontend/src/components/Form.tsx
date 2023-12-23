import { useRef } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

function Form() {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);

      const newProduct = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: formData.get('price') as string,
        quantity: formData.get('quantity') as string,
      };

      if (!newProduct.description || !newProduct.name
      || !newProduct.price || !newProduct.quantity) {
        return toast.warning('Preencha todos os dados');
      }

      try {
        const res = await axios.post('http://localhost:5000/products/', newProduct);
        const { message } = res.data;
        toast.success(message);
      } catch (error: any) {
        console.log(error);
        toast.error('Erro ao cadastrar o produto.');
      }
    }
  };

  return (
    <form ref={ form } onSubmit={ handleSubmit }>
      <div>
        <label>
          Nome
          <input type="text" name="name" />
        </label>
        <label>
          Descrição
          <input type="text" name="description" />
        </label>
        <label>
          Preço
          <input type="text" name="price" />
        </label>
        <label>
          Quantidade
          <input type="number" name="quantity" />
        </label>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Form;
