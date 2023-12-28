import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/api';
import useLocalStorage from '../hooks/useLocalStore';
import MainContext from '../context/MainContext';

type LoginFormProps = {
  submitName: string,
  getForm: (data: UserType) => void,
};

function LoginForm({ submitName, getForm }: LoginFormProps) {
  const { authorization } = useContext(MainContext);
  const navigate = useNavigate();
  const [, setToken] = useLocalStorage('token', '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (user: UserType) => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', user);
      setToken(data.token);
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      return toast.warning('Preencha todos os dados');
    }

    const user: UserType = {
      username,
      password,
    };

    getForm(user);
    handleLogin(user);

    if (authorization.isAuthorized) {
      navigate('/');
    }
    console.log(authorization.isAuthorized);
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
        type="password"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button>{submitName}</button>
    </form>
  );
}

export default LoginForm;
