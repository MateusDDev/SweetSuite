import { useRef } from 'react';

function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form ref={ formRef }>
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
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form;
