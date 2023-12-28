import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type LoginFormProps = {
  submitName: string,
  playAxios: any,
};

function LoginForm({ submitName, playAxios }: LoginFormProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      return toast.warning('Preencha todos os dados');
    }

    const user = {
      username,
      password,
    };

    playAxios(user);

    navigate('/');
  });

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={ username }
        onChange={ ({ target }) => setUsername(target.value) }
      />
      <input
        type="text"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button>{submitName}</button>
    </form>
  );
}

export default LoginForm;
